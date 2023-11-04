import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

// Inspired by https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus
export default function GiscusComponent() {
  // Throws error: Hook useColorMode is called outside the <ColorModeProvider>. Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.
  // const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="ben-xD/orth.uk-comments"
      repoId="R_kgDOGjNfow"
      category="Announcements"
      categoryId="DIC_kwDOGjNfo84CBEP2"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={"light"}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
