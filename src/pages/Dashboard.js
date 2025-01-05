javascript
Copy code
import React, { useEffect, useState } from 'react';
import ReminderCard from '../components/ReminderCard';
import axios from 'axios';

const Dashboard = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/reminders`)
      .then(response => setReminders(response.data))
      .catch(error => console.error('Error fetching reminders:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {reminders.map(reminder => (
        <ReminderCard key={reminder.id} reminder={reminder} />
      ))}
    </div>
  );
};

export default Dashboard;
