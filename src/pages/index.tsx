import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React, { SFC } from 'react';
import { Bio } from '../components/bio';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { RootDataStaticQuery } from '../graphql-types';
import { getProp } from '../utils/getProps';
import { SingleBlogTitle } from '../components/SingleBlogTitle';
import { Title, Divider } from '../styles/basicStyledComponents';

type Props = PageRendererProps;

const BlogIndex: SFC<Props> = ({ location }) => {
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
      .on('site')
      .on('siteMetadata')
      .on('title')
      .get() || 'not set';
  const posts = getProp(data)
    .on('allMarkdownRemark')
    .on('edges')
    .get();
  const SmallDivider = Divider(1);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="newest posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      {posts &&
        posts.slice(0, 5).map(({ node }) => {
          const frontmatterTitle = getProp(node)
            .on('frontmatter')
            .on('title')
            .get();
          const frontmatterDate = getProp(node)
            .on('frontmatter')
            .on('date')
            .get();
          const frontmatterHtml = getProp(node)
            .on('frontmatter')
            .on('description')
            .get();
          const fields = getProp(node)
            .on('fields')
            .get();
          const slug =
            getProp(fields)
              .on('slug')
              .get() || 'no-slug';
          const excerpt = node.excerpt || '<span>no html</span>';

          const title = frontmatterTitle || slug;
          return (
            <div key={slug}>
              <SingleBlogTitle title={title} html={frontmatterHtml || excerpt} slug={slug} date={frontmatterDate} />
              <SmallDivider />
            </div>
          );
        })}
    </Layout>
  );
};

export default BlogIndex;
