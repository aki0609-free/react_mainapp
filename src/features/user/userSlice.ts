import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  userId: string;
};

const initialState: UserState = {
  userId: 'c3',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUserId = (state: RootState) => state.user.userId;

export default userSlice.reducer;