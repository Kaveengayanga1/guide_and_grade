import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import animate.css for animations

const host = "https://guide-and-grade-api.onrender.com";
export default function Timer(props) {
    async function setTimer() {

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                startTime: time,
            }),
        };
        fetch(host + "/setStartTime", requestOptions);
    }
    function handleStartStop() {
        if (start) {
            setStart(false);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
            };
            fetch(
                "https://guide-and-grade-api.onrender.com/stopTimer",
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
                "https://guide-and-grade-api.onrender.com/startTimer",
                requestOptions
            );
        }
    }
    function resetTimer() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: "{}",
        };
        fetch(
            "https://guide-and-grade-api.onrender.com/resetTimer",
            requestOptions
        );
    }
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showModal, setShowModal] = useState(false); // Time's Up modal
    const [showCloseModal, setShowCloseModal] = useState(false); // Close button modal

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0 && isRunning) {
            setIsRunning(false);
            setShowModal(true); // Show modal when time reaches 0
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = async () => {
        if (time > 0) {
            await setTimer();
            handleStartStop();
            setIsRunning(true);
            setInputSeconds(0);
            setInputMinutes(0);
        }
    };

    const handleStop = () => {
        handleStartStop();
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(inputMinutes * 60 + inputSeconds);
        setIsRunning(false);
        resetTimer();
        setInputSeconds(0);
        setInputMinutes(0);
    };

    const handleMinutesChange = (e) => {
        const newMinutes = parseInt(e.target.value, 10) || 0;
        setInputMinutes(newMinutes);
        setTime(newMinutes * 60 + inputSeconds);
    };

    const handleSecondsChange = (e) => {
        const newSeconds = parseInt(e.target.value, 10) || 0;
        setInputSeconds(newSeconds);
        setTime(inputMinutes * 60 + newSeconds);
    };

    const handleSetTime = () => {
        setTime(inputMinutes * 60 + inputSeconds);
        setIsRunning(false);
        setInputSeconds(0);
        setInputMinutes(0);
    };

    // Close "Time's Up" modal and show "Close Button Clicked" modal
    const closeModal = () => {
        setShowModal(false);
        setShowCloseModal(true);
    };

    // Close "Close Button Clicked" modal
    const closeCloseModal = () => {
        setShowCloseModal(false);
    };

    // Handlers for range slider
    const handleMinutesSliderChange = (e) => {
        const minutes = parseInt(e.target.value, 10);
        setInputMinutes(minutes);
        setTime(minutes * 60 + inputSeconds);
    };

    const handleSecondsSliderChange = (e) => {
        const seconds = parseInt(e.target.value, 10);
        setInputSeconds(seconds);
        setTime(inputMinutes * 60 + seconds);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100"
        >
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5 " data-aos='zoom-in' data-aos-delay="400" data-aos-duration="1000">
                        <div className="container text-center p-4 shadow rounded bg-light">
                            <h1 className="mb-4">Start Counting</h1>
                            <div
                                className={`display-4 mb-4 ${time <= 10 ? 'text-danger animate__animated animate__flash' : ''}`}
                            >
                                {formatTime(time)}
                            </div>

                            {/* Time setter inputs */}
                            <div className="d-flex justify-content-center mb-4">
                                <div className="me-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="59"
                                        value={inputMinutes}
                                        onChange={handleMinutesSliderChange}
                                        className="form-range"
                                    />
                                    <div>{`Minutes: ${inputMinutes}`}</div>
                                </div>

                                <div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="59"
                                        value={inputSeconds}
                                        onChange={handleSecondsSliderChange}
                                        className="form-range"
                                    />
                                    <div>{`Seconds: ${inputSeconds}`}</div>
                                </div>
                            </div>

                            <div className="btn-group" role="group">
                                <button className="btn btn-success" onClick={handleStart} disabled={isRunning || time === 0}>
                                    Start
                                </button>
                                <button className="btn btn-primary" onClick={handleStop} disabled={!isRunning}>
                                    Pause
                                </button>
                                <button className="btn btn-danger" onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>


            {/* Modal for Time's Up message */}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" aria-hidden={!showModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Time's Up!</h5>
                        </div>
                        <div className="modal-body">
                            <p>The timer has reached zero. Presentation time is up!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                        </div>
                    </div>
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
