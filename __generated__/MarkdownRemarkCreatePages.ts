/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MarkdownRemarkCreatePages
// ====================================================

export interface MarkdownRemarkCreatePages_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface MarkdownRemarkCreatePages_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
}

export interface MarkdownRemarkCreatePages_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  fields: MarkdownRemarkCreatePages_allMarkdownRemark_edges_node_fields | null;
  frontmatter: MarkdownRemarkCreatePages_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface MarkdownRemarkCreatePages_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: MarkdownRemarkCreatePages_allMarkdownRemark_edges_node;
}

export interface MarkdownRemarkCreatePages_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: MarkdownRemarkCreatePages_allMarkdownRemark_edges[];
}

export interface MarkdownRemarkCreatePages {
  allMarkdownRemark: MarkdownRemarkCreatePages_allMarkdownRemark | null;
}
