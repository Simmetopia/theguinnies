import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import { FadeLink } from '../components/link';

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
  border-radius: 8px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  padding: 10px;
`;

export const Divider = (amount: number, direction?: 'row' | 'column') => {
  return direction === 'row'
    ? styled.div`
        margin-left: ${rhythm(amount)};
      `
    : styled.div`
        margin-bottom: ${rhythm(amount)};
      `;
};
export const Chip = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: auto;
  padding: 5px 15px;
  &:hover {
    background-color: #eee;
  }
`;

export const SelectedChip = styled(Chip)`
  background-color: #ff9a00;
  border-color: #ff9a0f;
  color: #fff;
  &:hover {
    background-color: #ff9f5f;
  }
`;
