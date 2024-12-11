import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card/Card';

const Dashboard = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => setDarkTheme(!isDarkTheme);

    return (
        <div className={`container-fluid ${isDarkTheme ? 'dark-theme-variables' : ''}`}>
            <div className="row">
                {/* Main Content */}
                <main className="col-12">
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <h1>Dashboard</h1>
                        <input type="date" className="form-control w-auto" />
                    </div>

                    {/* Insights */}
                    <div className="container py-4">
                        <div className="row">
                            {/* Left Container with Larger Card */}
                            <div className="col-12 col-md-6 mb-4">
                                <Card name="Overall" progress={75} borderColor="#ff6347" progressColor="#ff6347" size={150} />
                            </div>

                            {/* Right Container for 2x2 Grid of Smaller Cards */}
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12 col-sm-6 mb-4">
                                        <Card name="Clarity" progress={60} borderColor="#1e90ff" progressColor="#1e90ff" size={80} />
                                    </div>
                                    <div className="col-12 col-sm-6 mb-4">
                                        <Card name="Fulency" progress={50} borderColor="#ffcc00" progressColor="#ffcc00" size={80} />
                                    </div>
                                    <div className="col-12 col-sm-6 mb-4">
                                        <Card name="Pacing" progress={80} borderColor="#32cd32" progressColor="#32cd32" size={80} />
                                    </div>
                                    <div className="col-12 col-sm-6 mb-4">
                                        <Card name="Coherence" progress={90} borderColor="#ff1493" progressColor="#ff1493" size={80} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Dashboard;
