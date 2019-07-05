/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteErrorData
// ====================================================

export interface SiteErrorData_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface SiteErrorData_site {
  __typename: "Site";
  siteMetadata: SiteErrorData_site_siteMetadata | null;
}

export interface SiteErrorData {
  site: SiteErrorData_site | null;
}
