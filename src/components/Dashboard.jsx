javascript
Copy code
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Fetch vehicle data from backend API
        fetch('http://your-backend-api/vehicles')
            .then((res) => res.json())
            .then((data) => setVehicles(data));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.registrationNumber}>
                        {vehicle.registrationNumber} - Insurance Expiry: {vehicle.insuranceExpiry}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
