import React, { FC } from 'react';
import { Chip, Divider, SelectedChip } from '../styles/basicStyledComponents';
import styled from 'styled-components';

interface Props {
  queryTags: string | string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const tags = ['code', 'life', 'gatsby'];

export const FilterChips: FC<Props> = ({ queryTags }) => {
  const SmallDivider = Divider(0.2, 'row');
  return (
    <Container>
      {tags.map(tag => {
        const isSelected = () => {
          if (Array.isArray(queryTags)) {
            return queryTags.indexOf(tag) !== -1;
          } else {
            return queryTags === tag;
          }
        };
        const RChip = isSelected() ? SelectedChip : Chip;
        return (
          <Container key={tag}>
            <RChip>{tag}</RChip>
            <SmallDivider />
          </Container>
        );
      })}
    </Container>
  );
};
