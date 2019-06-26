/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchEngine
// ====================================================

export interface SearchEngine_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface SearchEngine_site {
  __typename: "Site";
  siteMetadata: SearchEngine_site_siteMetadata | null;
}

export interface SearchEngine {
  site: SearchEngine_site | null;
}
