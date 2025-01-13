import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import animate.css for animations

const host = "https://guide-and-grade-api.onrender.com";
//const host = "http://localhost:5000";
export default function Timer(props){

    //Throws error if timer could not be set
    //Sets the timer
    async function setTimer() {
        let stat=true;
        const requestOptions1 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                stopTime: totalTime
            }),
        };
        const setStopPromise = fetch(host + "/setStopTime", requestOptions1).then(
            (response) => {
                if(!response.ok){
                    stat=false;
                    throw new Error("Stop time not set successfully");
                }
            }
        );
        const requestOptions2 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                warnTime: warningTime
            }),
        };
        const setWarnPromise=fetch(host + "/setWarnTime", requestOptions2).then(
            (response) => {
                if(!response.ok){
                    stat=false;
                    throw new Error("Warn time not set successfully");
                }
            }
        );
        const requestOptions3 = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startTime: 0
            }),
        };
        const setStartPromise=fetch(host + "/setStartTime", requestOptions3).then(
            (response) => {
                if(!response.ok){
                    stat=false;
                    throw new Error("Start time not set successfully");
                }
            }
        );
        await Promise.all([setStopPromise,setWarnPromise,setStartPromise]);
        if(!stat){
            throw new Error("Timer could not be set");
        }
    }

    //Resets the timer
    //Throws error if timer could not be reset
    async function resetTimer() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: "{}",
        };
        await fetch(
            host + "/resetTimer",
            requestOptions
        ).then(
            (response) => {
                if(!response.ok){
                    throw new Error("Timer could not be reset");
                }
            }
        );
    }

    const [start, setStart] = useState(false); // Start button state
    const [time, setTime] = useState(0); // Timer state
    const [totalTime, settotalTime] = useState(0); // Total time state
    const [warningTime, setwarningTime] = useState(0); // Warning time state
    const [showCloseModal, setShowCloseModal] = useState(false); // Show presentation evaluated status

    useEffect(() => {
        AOS.init({ once: true });
        const eventSource = new EventSource(
          host+"/timer"
        );
        if (typeof eventSource != undefined) {
          console.log("Connection with timer successful");
          eventSource.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
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

    async function generateReport() {
        // make post request to /generateReport endpoint
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: "{}",
        };
        let message= await fetch(
            host + "/generateReport",
            requestOptions
        ).then(
            (response) => {
                if(response.status==204){
                    return "The microphone was disabled. Please enable the microphone and try again.";
                }else if(response.status==200){
                    setShowCloseModal(true);
                }else{
                    return "An error occurred while generating the report";
                }
            }
        );
        if(message){
            alert(message);
        }
    }

    const handleStartStop = async () => {
        if (start) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
            };
            fetch(
                host + "/stopTimer",
                requestOptions
            ).then((response) => {
                if(response.ok){
                    setStart(false);
                }else{
                    alert("Timer could not be stopped");
                }
            });
        } else {
            handleReset();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
            };
            fetch(
                host + "/startTimer",
                requestOptions
            ).then((response) => {
                if(response.ok){
                    setStart(true);
                }else{
                    alert("Timer could not be started");
                }
            });
        }
    };

    const handleReset = async () => {
        await setTimer();
        setTime(0);
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
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3" data-aos='zoom-in' data-aos-delay="400" data-aos-duration="1000">
                    <div className="container text-center p-4 shadow rounded bg-light">
                        <h1 className="mb-4">Timer</h1>
                        <div
                            className={`display-4 mb-4 ${time >= warningTime ? 'text-danger animate__animated animate__flash' : ''}`}
                        >
                            {formatTime(time)}
                        </div>

                        {/* Time setter inputs */}
                        <div className="form-group">
                            <label htmlFor="totalTime">Total Time (seconds)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalTime"
                                value={totalTime}
                                onChange={handleTotalTimeChange}
                                disabled={start}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="warningTime">Warning Time (seconds)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="warningTime"
                                value={warningTime}
                                onChange={handleWarningTimeChange}
                                disabled={start}
                            />
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                                <button className="btn btn-primary w-100" onClick={handleStartStop}>
                                    {start ? 'Stop' : 'Start'}
                                </button>
                            </div>
                            <div className="col-12 col-sm-4 mb-2 mb-sm-0">
                                <button className="btn btn-primary w-100" onClick={generateReport} disabled={start}>
                                    Generate Report
                                </button>
                            </div>
                            <div className="col-12 col-sm-4">
                                <button className="btn btn-danger w-100" onClick={handleReset} disabled={start || time == 0}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal for Close button clicked */}
            <div className={`modal fade ${showCloseModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!showCloseModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>The presentation is being evaluated. Click the button below to view the results.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
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
