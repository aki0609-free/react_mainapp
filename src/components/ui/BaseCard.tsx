import React, { ReactNode, VFC } from 'react'
import styled from 'styled-components';

type Props = {
  children: ReactNode;
}

export const BaseCard: VFC<Props> = (props) => {
  return (
    <CardWrapper>
      {props.children}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
`;