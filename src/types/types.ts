export type Area = 'frontend' | 'backend' | 'career';

export type Coach = {
  id: string;
  firstName: string;
  lastName: string;
  areas: Area[];
  description: string;
  hourlyRate: number;
};

export type Request = {
  id: string;
  coachId: string;
  email: string;
  message: string;
};

export type ValidArea = {
  frontend: boolean;
  backend: boolean;
  career: boolean;
};

export type InputField = {
  value: any;
  isValid: boolean;
};