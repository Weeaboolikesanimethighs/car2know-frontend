import React from "react";
import { useAuth } from '../contexts/AuthContext';
import { Line, Bar } from "react-chartjs-2";

const AdminPage = () => {
    const { isAdmin } = useAuth();

    if (!isAdmin) {
        return <p>nicht Admin</p>;
    }

    const dataLineChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };


    return (
        <div>
            <h1>Admin</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
                    <Line data={dataLineChart} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
