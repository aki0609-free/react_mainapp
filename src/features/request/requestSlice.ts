import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Request } from "../../types/types";
import { contact, fetchWith } from "./requestAPI";

export interface RequestsState {
  lastFetch: number | null;
  requests: Request[];
};

const initialState: RequestsState = {
  lastFetch: null,
  requests: [],
};

export const contactCoach = createAsyncThunk(
  'request/contact',
  async (newRequest: Request) => {
    const request: Request = await contact(newRequest);
    return request;
  }
);

export const fetchRequests = createAsyncThunk(
  'request/fetchWith',
  async (coachId: string) => {
    const requests: Request[] = await fetchWith(coachId);
    return requests;
  }
)

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setFetchTimestamp: (state) => {
      state.lastFetch = new Date().getTime();
    },
    addRequest: (state, action: PayloadAction<Request>) => {
      state.requests.push(action.payload);
    },
    setRequests: (state, action: PayloadAction<Request[]>) => {
      state.requests = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactCoach.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
      })
  }
});

export const selectRequests = (state: RootState) => {
  const coachId = state.user.userId;
  return state.request.requests.filter(req => req.coachId === coachId);
};

export const selectRequestFlag = (state: RootState) => {
  return state.request.requests && state.request.requests.length > 0;
};

export const { setFetchTimestamp, addRequest, setRequests } = requestSlice.actions;
export default requestSlice.reducer;