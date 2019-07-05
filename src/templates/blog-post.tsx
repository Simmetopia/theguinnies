import { graphql, PageRendererProps } from 'gatsby';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { Layout } from '../components/layout';
import { FadeLink } from '../components/link';
import { SEO } from '../components/seo';
import { rhythm, styledScale } from '../utils/typography';
import { BlogPostMeta } from '../lib/createPages';
import { getProp } from '../utils/getProps';
import { BlogPostBySlug } from '../../__generated__/BlogPostBySlug';

interface Props extends PageRendererProps {
  pageContext: BlogPostMeta;
  data: BlogPostBySlug;
}

const Date = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const BlogPostTemplate: SFC<Props> = ({ data: rawData, location, pageContext }) => {
  const data = rawData;
  const post = getProp(data)
    .on('markdownRemark')
    .get();
  const excerpt = getProp(post)
    .on('excerpt')
    .get();
  const frontmatter = getProp(post)
    .on('frontmatter')
    .get();
  const html = getProp(post)
    .on('html')
    .get();
  const siteTitle = getProp(data)
    .on('site')
    .on('siteMetadata')
    .on('title')
    .get();
  const frontmatterTitle = getProp(post)
    .on('frontmatter')
    .on('title')
    .get();
  const frontmatterDate = getProp(post)
    .on('frontmatter')
    .on('date')
    .get();
  const frontmatterHtml = getProp(post)
    .on('frontmatter')
    .on('description')
    .get();
  const { previous, next } = pageContext;
  if (!excerpt || !frontmatter || !html || !siteTitle || !frontmatterTitle || !frontmatterDate || !frontmatterHtml) {
    return null;
  }
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={frontmatterTitle} description={frontmatter.description || excerpt} />
      <h1>{frontmatterTitle}</h1>
      <Date>{frontmatterDate}</Date>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />
      <Bio />
      <PostNavigator>
        <li>
          {previous && previous.fields && previous.frontmatter && previous.fields.slug && (
            <FadeLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </FadeLink>
          )}
        </li>
        <li>
          {next && next.fields && next.frontmatter && next.fields.slug && (
            <FadeLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </FadeLink>
          )}
        </li>
      </PostNavigator>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
