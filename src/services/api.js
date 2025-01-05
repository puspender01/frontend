javascript
Copy code
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const getReminders = () => {
  return axios.get(`${API_URL}/reminders`);
};

export const addReminder = (reminder) => {
  return axios.post(`${API_URL}/reminders`, reminder);
};
