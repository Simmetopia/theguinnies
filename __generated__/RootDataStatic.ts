/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RootDataStatic
// ====================================================

export interface RootDataStatic_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface RootDataStatic_site {
  __typename: "Site";
  siteMetadata: RootDataStatic_site_siteMetadata | null;
}

export interface RootDataStatic_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface RootDataStatic_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  title: string | null;
  description: string | null;
  tags: (string | null)[] | null;
}

export interface RootDataStatic_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: RootDataStatic_allMarkdownRemark_edges_node_fields | null;
  frontmatter: RootDataStatic_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface RootDataStatic_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: RootDataStatic_allMarkdownRemark_edges_node;
}

export interface RootDataStatic_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: RootDataStatic_allMarkdownRemark_edges[];
}

export interface RootDataStatic {
  site: RootDataStatic_site | null;
  allMarkdownRemark: RootDataStatic_allMarkdownRemark | null;
}
