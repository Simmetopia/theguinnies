---
title: Gatsby js 
description: Headless CMS done right
date: "2019-06-23T15:00:00.000Z"
tags: [code, gatsby]
---
Styled compoenents

```typescript
export const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
  margin-top: ${rhythm(1 / 4)};
`;

export const Caption = styled.i`
  font-size: 0.85em;
`;

export const RenderInnerHtml = styled.div``;

export const StyledLink = styled(FadeLink)`
  box-shadow: none;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  padding: 10px 5px;
`;

export const Divider = (amount: 1 | 2 | 3) => styled.div`
  margin-bottom: ${rhythm(amount)};
`;
```
