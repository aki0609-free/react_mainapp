import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import coachReducer from '../features/coach/coachSlice';
import requestReducer from '../features/request/requestSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    coach: coachReducer,
    request: requestReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
