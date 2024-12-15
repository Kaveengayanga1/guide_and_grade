import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
    const [time, setTime] = useState(0);//default
    const [inputMinutes, setInputMinutes] = useState("");
    const [inputSeconds, setInputSeconds] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        if (time > 0) {
            setIsRunning(true);
        }
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(inputMinutes * 60 + inputSeconds);
        setIsRunning(false);
    };

    const handleMinutesChange = (e) => {
        const newMinutes = parseInt(e.target.value, 10) || 0;
        setInputMinutes(newMinutes);
    };

    const handleSecondsChange = (e) => {
        const newSeconds = parseInt(e.target.value, 10) || 0;
        setInputSeconds(newSeconds);
    };

    const handleSetTime = () => {        
        setTime(inputMinutes * 60 + inputSeconds);
        setIsRunning(false);
        setInputSeconds("");
        setInputMinutes("");
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container text-center">
                <h1 className="mb-4">Countdown Timer</h1>
                <div 
                    className={`display-4 mb-4 ${time != 0 & time <= 10 ? 'text-danger' : ''}`}
                >
                    {formatTime(time)}
                </div>

                <div className="d-flex justify-content-center mb-4">
                    <input
                        id='input-minutes'
                        type="number"
                        className="form-control w-25 me-2"
                        value={inputMinutes}
                        onChange={handleMinutesChange}
                        min="0"
                        placeholder="Minutes"
                    />
                    <input
                        id='input-seconds'
                        type="number"
                        className="form-control w-25 me-2"
                        value={inputSeconds}
                        onChange={handleSecondsChange}
                        min="0"
                        max="59"
                        placeholder="Seconds"
                    />
                    <button className="btn btn-primary" onClick={handleSetTime}>
                        Set Time
                    </button>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>

                <div className="btn-group" role="group">
                    <button className="btn btn-success" onClick={handleStart} disabled={isRunning || time === 0}>
                        Start
                    </button>
                    <button className="btn btn-danger" onClick={handleStop} disabled={!isRunning}>
                        Stop
                    </button>                    
                </div>
            </div>
        </div>
    );
};

export default Timer;
