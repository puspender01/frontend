javascript
Copy code
import React, { useState } from 'react';

function AddVehicle() {
    const [form, setForm] = useState({
        registrationNumber: '',
        insuranceExpiry: '',
        pucExpiry: '',
        serviceReminder: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://your-backend-api/add-vehicle', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        }).then(() => alert('Vehicle added successfully!'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Vehicle</h2>
            <input name="registrationNumber" placeholder="Registration Number" onChange={handleChange} />
            <input type="date" name="insuranceExpiry" onChange={handleChange} />
            <input type="date" name="pucExpiry" onChange={handleChange} />
            <input type="date" name="serviceReminder" onChange={handleChange} />
            <button type="submit">Add Vehicle</button>
        </form>
    );
}

export default AddVehicle;
