/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
// CHANGED
import Giscus from "@giscus/react";
import type { Props } from "@theme/MDXPage";

import styles from "./styles.module.css";

export default function MDXPage(props: Props): JSX.Element {
  const { content: MDXPageContent } = props;
  const {
    // CHANGED
    metadata: { title, description, permalink, frontMatter },
  } = MDXPageContent;
  const { wrapperClassName, hide_table_of_contents: hideTableOfContents } =
    frontMatter;

  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage
      )}
    >
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className="container container--fluid margin-vert--lg">
          <div className={clsx("row", styles.mdxPageWrapper)}>
            <div className={clsx("col", !hideTableOfContents && "col--8")}>
              <article>
                <MDXContent>
                  <MDXPageContent />
                  {/* CHANGED */}
                  {frontMatter["isCommentsEnabled"] === true ? (
                    <>
                      <Giscus
                        repo="ben-xD/orth.uk-comments"
                        repoId="R_kgDOGjNfow"
                        category="Announcements"
                        categoryId="DIC_kwDOGjNfo84CBEP2"
                        mapping="pathname"
                        term={permalink}
                        reactionsEnabled="1"
                        emitMetadata="0"
                        theme="light"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </MDXContent>
              </article>
            </div>
            {!hideTableOfContents && MDXPageContent.toc.length > 0 && (
              <div className="col col--2">
                <TOC
                  toc={MDXPageContent.toc}
                  minHeadingLevel={frontMatter.toc_min_heading_level}
                  maxHeadingLevel={frontMatter.toc_max_heading_level}
                />
              </div>
            )}
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
