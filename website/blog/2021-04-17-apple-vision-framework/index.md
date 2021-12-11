---
title: 'What ML model does Apple Vision Framework use?'
authors: ben
slug: 'apple-vision-framework'
description: 'Discovering a little more about Vision on macOS'
tags:
  - coreML
  - Vision
  - macOS
---

Developers can perform computer vision tasks conveniently using the [Vision](https://developer.apple.com/documentation/vision) framework, which is a convenient wrapper around coreML, coreML models and associated logic provided by Apple.

<!--truncate-->

> **Optional extra reading:** If you haven't used coreML before, have a go at the tutorials on the [Apple documentation](https://developer.apple.com/documentation/vision) or build a computer vision project for yourself. [This](https://machinethink.net/blog/peek-inside-coreml/) is a nice deep dive into coreML, which doesn't help you use it, but allows you to compare coreML with TensorFlow and TensorFlow lite, and see how models are stored. I recommend it to people who have used coreML a few times in the past.

## Discovering where the files are

- Skip to [here](#resources-directory) to avoid the detail about discovering where the files are.
- _If you're curious about what syscalls there are on macOS:_ Run `sudo dtrace -ln 'syscall:::entry'` to see the system calls available on macOS, there seems to be 546.

- To use `dtrace`, we need to enable it. Restart into recovery mode.

  - Normal macs: Shutdown. Turn on, and hold ⌘ + R
  - Hackintosh macs: Enter the boot picker, and select `Recovery`, usually 2nd or 3rd in the list.

- Disable system integrity protection, and optionally re-enable it without dtrace. So either:

  - `csrutil disable`, then `csrutil enable --without dtrace`

- I ran a built-in script in one terminal window: `sudo ./usr/bin/filebyproc.d`, and then ran my CLI tool

- In a separate terminal, run an application which uses Vision: e.g. `sudo dtrace -c image_analysis`. A load of paths will show up: search for relevant strings: `scene` if you're using labeling, `face` if you're using face detection, etc. Or just search for `vision`.

- I found that `/System/Library/Frameworks/Vision.framework/Resources` was being accessed

## Resources directory

- Lets `cd /System/Library/Frameworks/Vision.framework/Resources`
- This directory contains [espresso](https://codinfox.github.io/espresso/) models, which is a "A minimal high performance parallel neural network framework running on iOS".

- There are csv, txt and plist files which describe labels, relationships/ mappings

```
berry -> fruit
bib -> clothing
bichon -> dog
bicycle -> vehicle
CVML_UNKNOWN_70 -> sign
billiards -> sport
CVML_UNKNOWN_239 -> games
binoculars -> eyeglasses
bird -> animal
birdhouse -> structure
birthday_cake -> holiday
camel -> ungulates
camera -> equipment
camping -> recreation
candle -> light
candlestick -> decoration
candy -> food
candy_cane -> holiday
candy_cane -> candy
```

- Unimportant: To optimize for specific GPUs, there are Wisdom files `Wisdom/$HARDWARE_NAME/wisdom.json` which contain recommended parameters for specific layers in specific models.

Here are some takeaways:

- I learn that Apple uses (a fork of) https://codinfox.github.io/espresso/ for their models. I guess Apple just took this CMU project internally, it hasn't been [updated](https://github.com/codinfox/espresso) in 5 years.

- The actual model files are split into 3 files, .net, .shape and .weight files, just like any coreML model. Except in this case, its not packaged into an `.mlmodel` file or `.mlmodelc` directory, and its missing its .bin file (metadata).

  - > - **coremldata.bin:** this appears to be the model’s metadata (name of author etc) and the classification labels
    > - **model.espresso.net:** describes the structure of the model, i.e. which layers it uses and how they are connected to each other
    > - **model.espresso.shape:** the output sizes of the layers in the neural network (the same thing you saw in the output of the build step above)
    > - **model.espresso.weights:** the learned parameters of the model (this is usually a big file, 96MB for Inception-v3)
    > - **model/coremldata.bin:** ?
    >
    > [source](https://machinethink.net/blog/peek-inside-coreml/)

- An optimisation: Also, for most files, they’re not using json, and just text files (you can append to it without parsing the entire json file, this would avoid keeping the results of the CLI in memory until the json is saved). Since a json needs to be parsed in its entirety. (and so do protobufs, which is why FlatBuffers were created for tflite).

The rest of the details are in coreML and not necessarily Vision, which is described in Matthijs Holleman's blog post about coreML [here](https://machinethink.net/blog/peek-inside-coreml/). I might edit this page with more details as I get learn more about Vision.
