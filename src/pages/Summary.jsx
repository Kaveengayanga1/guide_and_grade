import React from 'react';
import Card from '../components/card/Card';  // Assuming Card component is imported

const Summary = (props) => {
    return (
        <div className="container py-4"
            //data-aos='zoom-in'
            //data-aos-delay="400"
        >
            <h1 className="mt-5 mb-3" data-aos="zoom-in" data-aos-duration="1000">Evaluation Result</h1>

            {/* Insights */}
            {/*Card container*/}
            <div className="container">
                <div className="row">
                    <div className="col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800">
                        <Card name="Overall" progress={75} borderColor="white" progressColor="lightblue" size={70} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800">
                        <Card name="Grammar" progress={75} borderColor="blue" progressColor="blue" size={70} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1800">
                        <Card name="Pacing" progress={75} borderColor="blue" progressColor="blue" size={70} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1800">
                        <Card name="Coherence" progress={75} borderColor="blue" progressColor="blue" size={70} />
                    </div>

                </div>
            </div>

            {/* Text and suggestions container */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 border rounded shadow" data-aos='fade-down' data-aos-delay="1000" data-aos-duration="2000">
                        <h3>Transcript</h3>
                        <div className=" p-3 overflow-auto shadow" style={{ maxHeight: '175px', maxWidth: '100%' }}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 border rounded shadow" data-aos='fade-down' data-aos-delay="1000" data-aos-duration="2000">
                        <h3>Suggestions</h3>
                        <p>Some suggestions here</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Summary;
