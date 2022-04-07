import React, { VFC } from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  title: string;
};
export const BaseBadge: VFC<Props> = (props) => {
  const { title, type } = props;
  const color = type === 'frontend' ? '#3d008d' :
    type === 'backend' ? '#71008d' : '#8d006e';

  return (
    <BadgeBox theme={{ color }}>
      { title }
    </BadgeBox>
  )
}

const BaseBadgeBox = styled.span`
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  color: white;
`;

const BadgeBox = styled(BaseBadgeBox)`
  background-color: ${({theme}) => theme.color}
`;