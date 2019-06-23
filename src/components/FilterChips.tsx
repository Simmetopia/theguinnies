import React, { FC } from 'react';
import { Chip, Divider, SelectedChip } from '../styles/basicStyledComponents';
import styled from 'styled-components';

interface Props {
  queryTags: string[];
  handleFilteredTags: (tags: string[]) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const tags = ['code', 'life', 'gatsby'];

export const FilterChips: FC<Props> = ({ queryTags, handleFilteredTags }) => {
  const SmallDivider = Divider(0.2, 'row');
  const onClick = (tag: string) => {
    const indexOfTag = queryTags.indexOf(tag);
    if (indexOfTag === -1) {
      handleFilteredTags([...queryTags, tag]);
    } else {
      const workArray = [...queryTags];
      workArray.splice(indexOfTag, 1);
      handleFilteredTags(workArray);
    }
  };
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
            <RChip onClick={() => onClick(tag)}>{tag}</RChip>
            <SmallDivider />
          </Container>
        );
      })}
    </Container>
  );
};
