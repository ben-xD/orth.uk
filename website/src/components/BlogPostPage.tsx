
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, {type ReactNode} from 'react';
 import clsx from 'clsx';
 import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
 import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
 import BlogLayout from '@theme/BlogLayout';
 import BlogPostItem from '@theme/BlogPostItem';
 import BlogPostPaginator from '@theme/BlogPostPaginator';
 import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
 import TOC from '@theme/TOC';
 import type {Props} from '@theme/BlogPostPage';
 import InnerHTML from 'dangerously-set-html-content'
 import type {BlogSidebar} from '@docusaurus/plugin-content-blog';
 
 function BlogPostPageContent({
   sidebar,
   children,
 }: {
   sidebar: BlogSidebar;
   children: ReactNode;
 }): JSX.Element {
   const {metadata, toc} = useBlogPost();
   const {nextItem, prevItem, frontMatter} = metadata;
   const {
     hide_table_of_contents: hideTableOfContents,
     toc_min_heading_level: tocMinHeadingLevel,
     toc_max_heading_level: tocMaxHeadingLevel,
   } = frontMatter;
   return (
     <BlogLayout
       sidebar={sidebar}
       toc={
         !hideTableOfContents && toc.length > 0 ? (
           <TOC
             toc={toc}
             minHeadingLevel={tocMinHeadingLevel}
             maxHeadingLevel={tocMaxHeadingLevel}
           />
         ) : undefined
       }>
       <BlogPostItem>{children}</BlogPostItem>
 
 {/* This is the only modification I made to https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/BlogPostPage/index.tsx, to add comments */}
       <InnerHTML html={`
      <script src="https://giscus.app/client.js"
        data-repo="ben-xD/orth.uk-comments"
        data-repo-id="R_kgDOGjNfow"
        data-category="Announcements"
        data-category-id="DIC_kwDOGjNfo84CBEP2"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
      </script>
      `} />

       {(nextItem || prevItem) && (
         <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
       )}
     </BlogLayout>
   );
 }
 
 export default function BlogPostPage(props: Props): JSX.Element {
   const BlogPostContent = props.content;
   return (
     <BlogPostProvider content={props.content} isBlogPostPage>
       <HtmlClassNameProvider
         className={clsx(
           ThemeClassNames.wrapper.blogPages,
           ThemeClassNames.page.blogPostPage,
         )}>
         <BlogPostPageMetadata />
         <BlogPostPageContent sidebar={props.sidebar}>
           <BlogPostContent />
         </BlogPostPageContent>
       </HtmlClassNameProvider>
     </BlogPostProvider>
   );
 }