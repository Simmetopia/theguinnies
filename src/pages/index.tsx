import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { FadeLink } from "../components/link";
import { SEO } from "../components/seo";
import { RootDataStaticQuery } from "../graphql-types";
import { getProp } from "../utils/getProps";
import { rhythm } from "../utils/typography";

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
  const data: RootDataStaticQuery = useStaticQuery(graphql`
    query RootDataStatic {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `);

  const siteTitle =
    getProp(data)
      .on("site")
      .on("siteMetadata")
      .on("title")
      .get() || "not set";
  const posts = getProp(data)
    .on("allMarkdownRemark")
    .on("edges")
    .get();

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts &&
        posts.map(({ node }) => {
          const frontmatterTitle = getProp(node)
            .on("frontmatter")
            .on("title")
            .get();
          const frontmatterDate = getProp(node)
            .on("frontmatter")
            .on("date")
            .get();
          const frontmatterHtml = getProp(node)
            .on("frontmatter")
            .on("description")
            .get();
          const fields = getProp(node)
            .on("fields")
            .get();
          const slug =
            getProp(fields)
              .on("slug")
              .get() || "no-slug";
          const excerpt = node.excerpt || "<span>no html</span>";

          const title = frontmatterTitle || slug;
          return (
            <div key={slug}>
              <Title>
                <StyledLink to={slug}>{title}</StyledLink>
              </Title>
              <small>{frontmatterDate}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatterHtml || excerpt
                }}
              />
            </div>
          );
        })}
    </Layout>
  );
};

export default BlogIndex;
