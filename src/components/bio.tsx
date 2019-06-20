import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React, { ComponentProps, forwardRef, Ref } from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
);

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`;

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <Content>
      <Avatar
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: "50%" }}
      />
      <p>
        Tanker fra <strong>{author}</strong> som data han blev 27 valgte at få
        to marsvin
      </p>
    </Content>
  );
};
