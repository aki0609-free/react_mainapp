import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'
import { CoachFilter } from '../../components/coaches/CoachFilter';
import { CoachItem } from '../../components/coaches/CoachItem';
import { BaseCard } from '../../components/ui/BaseCard';
import { BaseSpinner } from '../../components/ui/BaseSpinner';
import { selectCoaches, selectCoachesFlag, selectIsCoach } from '../../features/coach/coachSlice';
import { Area, Coach, ValidArea } from '../../types/types';
import styled from 'styled-components';
import { BaseButton } from '../../components/ui/BaseButton';


export const CoachesList = () => {
  const location = useLocation();

  const coaches = useSelector(selectCoaches);
  const hasCoaches = useSelector(selectCoachesFlag);
  const isCoach = useSelector(selectIsCoach);

  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ValidArea>({
    frontend: true,
    backend: true,
    career: true,
  });
  const [filteredCoach, setFilteredCoach] = useState<Coach[]>([]);

  const activateFilter = useCallback((updatedFilter: ValidArea) => {
    setActiveFilter(() => updatedFilter);
  }, []);

  useEffect(() => {
    setFilteredCoach(coaches.filter(coach => {
      const checkValidCoaches  = (areaName: Area) => activeFilter[areaName] && coach.areas.includes(areaName);
      if(checkValidCoaches('frontend')) return true;
      if(checkValidCoaches('backend')) return true;
      if(checkValidCoaches('career')) return true;
      return false;
    }));
  }, [coaches, activeFilter]);

  return (
    <>
      {location.pathname === '/' && <Navigate to="/coaches" />}
      <section>
        <CoachFilter filter={activeFilter} update={activateFilter} />
      </section>
      <BaseCard>
        <ButtonBox>
          <BaseButton mode="outline">Refresh</BaseButton>
          {!isCoach && <BaseButton link={false} to="/register">Register As A Coach</BaseButton>}
        </ButtonBox>
        {isLoading ? <BaseSpinner /> : 
          (<ul>
            {filteredCoach.map(coach => (
              <CoachItem
                key={coach.id}
                id={coach.id}
                firstName={coach.firstName}
                lastName={coach.lastName}
                rate={coach.hourlyRate}
                areas={coach.areas}
              />
            ))}
          </ul>)
        }
        {!hasCoaches && <h3>No Coaches Found.</h3>}
      </BaseCard>
    </>
  )
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`