javascript
Copy code
import React from 'react';

const ReminderCard = ({ reminder }) => {
  return (
    <div className="reminder-card">
      <h3>{reminder.title}</h3>
      <p>{reminder.details}</p>
      <p><strong>Due:</strong> {new Date(reminder.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default ReminderCard;
