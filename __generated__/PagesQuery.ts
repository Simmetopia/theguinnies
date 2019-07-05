/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PagesQuery
// ====================================================

export interface PagesQuery_allSitePage_nodes {
  __typename: "SitePage";
  path: string | null;
}

export interface PagesQuery_allSitePage {
  __typename: "SitePageConnection";
  nodes: PagesQuery_allSitePage_nodes[];
}

export interface PagesQuery {
  allSitePage: PagesQuery_allSitePage | null;
}
