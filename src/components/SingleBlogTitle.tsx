import React, { FC } from 'react';
import { StyledLink, Card, Title, Caption, RenderInnerHtml } from '../styles/basicStyledComponents';

type props = {
  slug: string;
  title: string;
  html: string;
  date: string;
};

export const SingleBlogTitle: FC<props> = ({ title, slug, html, date }) => {
  return (
    <StyledLink style={{ color: '#000' }} to={slug}>
      <Card>
        <Title>{title}</Title>
        <Caption> {date}</Caption>
        <RenderInnerHtml dangerouslySetInnerHTML={{ __html: html }}></RenderInnerHtml>
      </Card>
    </StyledLink>
  );
};
