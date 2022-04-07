import axios from "axios";
import { Request } from "../../types/types";

const baseUrl = 'https://vue-project-e5d7b-default-rtdb.firebaseio.com/';

export async function contact(newRequest: Request) {
  try {
    const { data } = await axios.post<Request>(`${baseUrl}requests/${newRequest.coachId}.json`, newRequest);
    return data;
  } catch(error) {
    throw new Error('Failed to request');
  }
}

export async function fetchWith(coachId: string) {
  try {
    const { data } = await axios.get(`${baseUrl}requests/${coachId}.json`)

    const requests: Request[] = [];

    for (const key in data) {
      requests.push(data[key] as Request);
    }

    return requests;
  } catch(error) {
    throw new Error('Failed to fetch requests');
  }
}