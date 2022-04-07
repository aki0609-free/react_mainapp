import React, { ChangeEvent, VFC } from 'react'
import { Area, ValidArea } from '../../types/types'
import { BaseCard } from '../ui/BaseCard'
import styled from 'styled-components';

const AREAS: Area[] = ['frontend', 'backend', 'career'];

type Props = {
  filter: ValidArea;
  update: (updatedFilter: ValidArea) => void;
}

export const CoachFilter: VFC<Props> = (props) => {

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const inputId = event.target.id;
    const isActive = event.target.checked;
    props.update({
      ...props.filter,
      [inputId]: isActive
    });
  }

  return (
    <BaseCard>
      <h2>Find Your Coach</h2>
      {AREAS.map(area => (
        <FilterWrapper>
          <input type="checkbox" id={area} checked={props.filter[area]} onChange={updateFilter} />
          <label htmlFor={area}>{area}</label>
        </FilterWrapper>
      ))}
    </BaseCard>
  )
}

const FilterWrapper = styled.span`
  margin-right: 1rem;
  label {
    vertical-align: middle;
    margin-left: 0.25rem;
  }
  input {
    vertical-align: middle;
  }
`