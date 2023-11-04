import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import GiscusComponent from "@site/src/components/GiscusComponent";
// import { useBlogPost } from "@docusaurus/theme-common/internal";

export default function FooterWrapper() {
  return (
    <>
      <Footer />
      <GiscusComponent />
    </>
  );
}
