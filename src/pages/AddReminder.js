javascript
Copy code
import React, { useState } from 'react';
import axios from 'axios';

const AddReminder = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReminder = { title, details, dueDate };
    
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/reminders`, newReminder)
      .then(() => alert('Reminder added!'))
      .catch(error => console.error('Error adding reminder:', error));
  };

  return (
    <div>
      <h1>Add Reminder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  );
};

export default AddReminder;
