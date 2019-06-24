import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React, { SFC } from 'react';
import { Bio } from '../components/bio';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { RootDataStaticQuery, Maybe } from '../graphql-types';
import { getProp } from '../utils/getProps';
import { SingleBlogTitle } from '../components/SingleBlogTitle';
import { Divider } from '../styles/basicStyledComponents';

type Props = PageRendererProps;

const filterFunction = (queryTags: string[], tags: Maybe<string>[]) => {
  let filterStatus = false;
  if (queryTags.length === 0) {
    if (tags.indexOf('life') !== -1) {
      return true;
    } else {
      return false;
    }
  }
  tags.forEach(tag => {
    if (Array.isArray(queryTags)) {
      queryTags.forEach(queryParamTag => {
        if (tag === queryParamTag) {
          filterStatus = true;
        }
      });
    }
  });
  return filterStatus;
};

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
              tags
            }
          }
        }
      }
    }
  `);
  // const [filteredTags, setFilteredTags] = useState<string[]>([]);
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
      <SEO title="newest posts" keywords={[`blog`, `marsvin`, `ingeniør`, `gatsby`]} />
      <Bio />
      {/*!!filteredTags && <FilterChips handleFilteredTags={setFilteredTags} queryTags={filteredTags} />*/}
      {posts &&
        posts
          .filter(({ node }) => {
            const tags =
              getProp(node)
                .on('frontmatter')
                .on('tags')
                .get() || [];
            return filterFunction([], tags);
          })
          .slice(0, 5)
          .map(({ node }) => {
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
