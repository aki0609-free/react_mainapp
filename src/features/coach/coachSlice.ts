import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Coach } from "../../types/types";
import { register, load } from './coachAPI';

export interface CoachesState {
  lastFetch: number | null;
  userIsCoach: boolean;
  coaches: Coach[];
};

const initialState: CoachesState = {
  lastFetch: null,
  userIsCoach: false,
  coaches: [
    {
      id: 'c1',
      firstName: 'Maximilian',
      lastName: 'Schwarzmuller',
      areas: ['frontend', 'backend', 'career'],
      description: "I'm Maximillian and I've worked as a freelance web developer for years",
      hourlyRate: 30,
    },
    {
      id: 'c2',
      firstName: 'Julie',
      lastName: 'Jones',
      areas: ['frontend', 'career'],
      description: "I'm Julie and as a senior developer in a big tech company",
      hourlyRate: 30,
    }
  ]
};

export const registerCoach = createAsyncThunk(
  'coach/register',
  async (coachData: Coach) => {
    const coach: Coach = await register(coachData);
    return coach;
  }
);

export const loadCoaches = createAsyncThunk(
  'coach/load',
  async (forceRefresh: boolean) => {
    const coaches: Coach[] = await load(forceRefresh);
    return coaches;
  }
);

export const coachSlice = createSlice({
  name: 'coach',
  initialState,
  reducers: {
    registerCoachWithoutAPI: (state, action: PayloadAction<Coach>) => {
      state.coaches.push(action.payload)
    },
    secCoaches: (state, action: PayloadAction<Coach[]>) => {
      state.coaches = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCoach.fulfilled, (state, action) => {
        state.coaches.push(action.payload);
      })
      .addCase(loadCoaches.fulfilled, (state, action) => {
        state.coaches = action.payload;
      })
  },
});

export const selectCoaches = (state: RootState) => state.coach.coaches;
export const selectCoachesFlag = (state: RootState) => {
  return state.coach.coaches && state.coach.coaches.length > 0;
};
export const selectIsCoach = (state: RootState) => {
  const userId = state.user.userId;
  return state.coach.coaches.some(coach => coach.id === userId);
};

export const { registerCoachWithoutAPI, secCoaches } = coachSlice.actions;
export default coachSlice.reducer;



