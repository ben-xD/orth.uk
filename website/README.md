# Website

This website can be seen at [orth.uk](https://orth.uk), and was built using [Docusaurus 2](https://docusaurus.io/). It replaced my old website, which you can see at [old.orth.uk](https://old.orth.uk).

Comments are stored in GitHub issues using [giscus](https://giscus.app/) in a separate [GitHub repository](https://github.com/ben-xD/orth.uk-comments).

# Tools used

- Built using [Docusaurus](https://docusaurus.io/), which uses React.
- Deployed with [Cloudflare Pages](https://pages.cloudflare.com/), on the free tier.
- Commenting system is [giscus](https://giscus.app/), which uses GitHub discussions to store comments. If I want to enable comments on any page, just add `isCommentsEnabled: true` to the YAML frontmatter. I previously used [Utterances](https://github.com/utterance/utterances`), but switched to giscus for more features (like page reactions).
  - Guidance on how to add these comments have been discussed a few times: https://madrus4u.com/blog/blog-comments, https://thedaxshepherd.net/2023/1/26/Docusaurus-Environment-Variables and https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus.
- DNS records managed on Cloudflare DNS.
- For workshop slides:
    - [Reveal.js](https://www.npmjs.com/package/reveal.js)
    - Start the server as usual (`npm start`), and visit the link (e.g. `https://orth.uk/workshops/adding-offline-to-flutter` or localhost)
- For codelabs:
    - Install [claat](https://github.com/googlecodelabs/tools): run `go install github.com/googlecodelabs/tools/claat@latest`
    - Create a markdown file following the standard [format](https://github.com/googlecodelabs/tools/tree/main/claat/parser/md)
    - Make changes to codelab markdown file (e.g. `index.md`)
    - Generate code: 
        - `cd static/codelabs`
        - run `claat export adding-offline-to-flutter/index.md`
            - Don't run claat in the root directory, because it defaults to outputting to the current directory.
    - Start the server as usual (`npm start`), and visit the link (e.g. https://orth.uk/codelabs/adding-offline-to-flutter or localhost)
        - Alternatively, serve files using `claat serve adding-offline-to-flutter`
