import { GatsbyLinkProps } from 'gatsby';
// tslint:disable-next-line:no-submodule-imports
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React, { FC } from 'react';

const FADE_TIME = 0.5;

type Props = GatsbyLinkProps<unknown>;

export const FadeLink: FC<Props> = ({ children, ...linkProps }) => {
  return (
    <AniLink fade={true} duration={FADE_TIME} {...linkProps}>
      {children}
    </AniLink>
  );
};
