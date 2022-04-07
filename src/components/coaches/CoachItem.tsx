import React, { useEffect, useState, VFC } from 'react'
import { useLocation } from 'react-router-dom';
import { Area } from '../../types/types';
import { BaseBadge } from '../ui/BaseBadge';
import { BaseButton } from '../ui/BaseButton';
import styled from 'styled-components';

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  rate: number;
  areas: Area[];
}

export const CoachItem: VFC<Props> = (props) => {
  const { id, firstName, lastName, rate, areas } = props;
  const location = useLocation();

  const [fullName, setFullName] = useState<string>('');
  const [linkToContact, setLinkToContact] = useState<string>('');
  const [baseLink, setBaseLink] = useState<string>('');
  
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
    setLinkToContact(`${location.pathname}/${id}/contact`);
    setBaseLink(`${location.pathname}/${id}`);
  }, [firstName, lastName, location, id]);

  return (
    <CoachBox>
      <CoachNameBox>{ fullName }</CoachNameBox>
      <CoachRateBox>{ rate }</CoachRateBox>
      <BadgeBox>
        {areas.map((area) => (
          <BaseBadge
            key={area}
            type={area}
            title={area}
          />
        ))}
      </BadgeBox>
      <ActionBox>
        <BaseButton
          mode="outline"
          link={false}
          to={linkToContact}
        >Contact</BaseButton>
        <BaseButton
          link={false}
          to={baseLink}
        >View Details</BaseButton>
      </ActionBox>
    </CoachBox>
  )
}

const CoachBox = styled.li`
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
`

const CoachNameBox = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const CoachRateBox = styled.h4`
  margin: 0.5rem 0;
`;

const ActionBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BadgeBox = styled.div`
  margin: 0.5rem 0;
`