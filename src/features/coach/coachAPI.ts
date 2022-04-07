import { Coach } from "../../types/types";
import axios from 'axios';

const baseUrl = 'https://vue-project-e5d7b-default-rtdb.firebaseio.com/';

export async function register(coachData: Coach): Promise<Coach> {
  try {
    const { data } = await axios.post<Coach>(`${baseUrl}coaches.json`, coachData);
    return data;
  } catch(error) {
    throw new Error('Failed to register coach');
  }
};

export async function load(forceRefresh: boolean): Promise<Coach[]> {
  try {
    if (!forceRefresh) throw new Error('forceRefresh is false');
    
    const { data } = await axios.get(`${baseUrl}coaches.json`);

    const coaches: Coach[] = [];

    for (const key in data) {
      coaches.push(data[key] as Coach);
    }

    return coaches;
  } catch(error) {
    const errMessage = error instanceof Error ? error.message : '';
    throw new Error(errMessage || 'Failed to load coach');
  }
}