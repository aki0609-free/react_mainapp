import React from 'react'
import { InputField } from '../../types/types';


const filedsReducer = (state, action) => {
  switch(action.type) {
    case 'INPUT':
      return {
        ...action.payload,
      };
    case 'INVALID':
      return {
        ...state,
        isValid: action.payload,
      }
  }
  return state;
}

export const CoachForm = () => {

  return (
    <div>

    </div>
  )
}
