import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import animate.css for animations

const host = "https://guide-and-grade-api.onrender.com";
//onst host = "http://localhost:5000";
export default function Timer(props){
    async function setTimer() {

        const requestOptions1 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                stopTime: totalTime
            }),
        };
        fetch(host + "/setStopTime", requestOptions1);
        const requestOptions2 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                warnTime: warningTime
            }),
        };
        fetch(host + "/setWarnTime", requestOptions2);
        const requestOptions3 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startTime: 0
            }),
        };
        fetch(host + "/setStartTime", requestOptions3);
    }

    function resetTimer() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: "{}",
        };
        fetch(
            host + "/resetTimer",
            requestOptions
        );
    }
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [totalTime, settotalTime] = useState(0);
    const [warningTime, setwarningTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showCloseModal, setShowCloseModal] = useState(false); // Close button modal

    useEffect(() => {
        AOS.init({ once: true });
        const eventSource = new EventSource(
          host+"/timer"
        );
        if (typeof eventSource != undefined) {
          console.log("Connection with timer successful");
          let oldVal = -1;
          eventSource.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            console.log(eventData);
            setTime(eventData.time);
            
          };
        } else {
          console.log("Coudn't connect to timer");
        }
        return () => eventSource.close();
      }, []);
    

    const formatTime = (seconds) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const generateReport = async () => {
        setShowCloseModal(true);
        // make post request to /generateReport endpoint
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: "{}",
        };
        fetch(
            host + "/generateReport",
            requestOptions
        );
    }
    const handleStartStop = async () => {
        if (start) {
            setStart(false);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
            };
            fetch(
                host + "/stopTimer",
                requestOptions
            );
        } else {
            setStart(true);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
            };
            fetch(
                host + "/startTimer",
                requestOptions
            );
        }
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const handleReset = async () => {
        await setTimer();
        setTime(0);
        setIsRunning(false);
    };

    const handleTotalTimeChange = (e) => {
        const tt = parseInt(e.target.value, 10) || 0;
        settotalTime(tt);
    };

    const handleWarningTimeChange = (e) => {
        const wt = parseInt(e.target.value, 10) || 0;
        setwarningTime(wt);
    };

    // Close "Close Button Clicked" modal
    const closeCloseModal = () => {
        setShowCloseModal(false);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100"
        >
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5 " data-aos='zoom-in' data-aos-delay="400" data-aos-duration="1000">
                        <div className="container text-center p-4 shadow rounded bg-light">
                            <h1 className="mb-4">Timer</h1>
                            <div
                                className={`display-4 mb-4 ${time >= warningTime ? 'text-danger animate__animated animate__flash' : ''}`}
                            >
                                {formatTime(time)}
                            </div>

                            {/* Time setter inputs */}
                            
                            <div className="btn-group" role="group">

                                <div className="div">
                                    Total Time:
                                    <input type='text' className='form-control' value={totalTime} onChange={handleTotalTimeChange} />
                                </div>
                                <div className="div">
                                    Warning Time:
                                    <input type='text' className='form-control' value={warningTime} onChange={handleWarningTimeChange} />
                                </div>

                            </div>
                            <div className="btn-group mt-3" role="group">

                                <div className="div">
                                    <button className="btn btn-primary mx-1" onClick={handleStartStop} >
                                        {start ? 'Pause' : 'Start'}
                                    </button>
                                </div>
                                <div className="div">
                                    <button className="btn btn-primary mx-1" onClick={generateReport} disabled={start || time === 0}>
                                        Generate Report
                                    </button>
                                </div>
                                <div className="div">
                                    <button className="btn btn-danger mx-1" onClick={handleReset} disabled={start || time === 0}>
                                        Reset
                                    </button>
                                </div>




                            </div>
                            <div className="btn-group" role="group">

                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>



            {/* Modal for Close button clicked */}
            <div className={`modal fade ${showCloseModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!showCloseModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Presentation Evaluated</h5>
                        </div>
                        <div className="modal-body">
                            <p>The presentation has been evaluated. Click the button below to view the results.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                console.log("Set Summary");

                                props.setPage('summary');
                                setShowCloseModal(false);
                            }}>View Results</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
