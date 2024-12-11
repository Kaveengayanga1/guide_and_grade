import React from 'react';
import Card from '../components/card/Card';  // Assuming Card component is imported

const Summary = () => {
    return (
        <div className="container py-4">
            <h1 className="mt-5 mb-5">Summary</h1>

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
                                <Card name="Clarity" progress={60} borderColor="#1e90ff" progressColor="#1e90ff" size={60} />
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <Card name="Fulency" progress={50} borderColor="#ffcc00" progressColor="#ffcc00" size={60} />
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <Card name="Pacing" progress={80} borderColor="#32cd32" progressColor="#32cd32" size={60} />
                            </div>
                            <div className="col-12 col-sm-6 mb-4">
                                <Card name="Coherence" progress={90} borderColor="#ff1493" progressColor="#ff1493" size={60} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Summary;
