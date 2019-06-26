/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MarkdownRemarkFragment
// ====================================================

export interface MarkdownRemarkFragment_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface MarkdownRemarkFragment_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  title: string | null;
}

export interface MarkdownRemarkFragment {
  __typename: "MarkdownRemark";
  fields: MarkdownRemarkFragment_fields | null;
  frontmatter: MarkdownRemarkFragment_frontmatter | null;
}
