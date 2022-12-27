import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});
