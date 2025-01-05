import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';  // Assuming Card component is imported

const host = "https://guide-and-grade-api.onrender.com";
// const host = "http://localhost:5000";
const Summary = (props) => {
    const [status, setStatus] = useState("processing");
    const [transcript, setTranscript] = useState("Loading...");
    

    useEffect(() => {
        const eventSource = new EventSource(
          host+"/get-status"
        );
        if (typeof eventSource != undefined) {
          console.log("Connection with status successful");
          eventSource.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            
            setStatus((prevStatus) => {
                console.log(prevStatus);
                if (eventData.status === "completed") {
                    console.log("Getting transcript");
                    getTranscript();
                    eventSource.close();
                }
                return eventData.status;
            });
          };
        } else {
          console.log("Coudn't connect to status");
        }
        return () => eventSource.close();
      }, []);
    const getTranscript = async () => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        fetch(host+"/get-transcription", requestOptions)
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                setTranscript(json.transcript);
            });
    }

    

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
                    <div className="col" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1250">
                        <Card name="Overall" progress={38} borderColor="white" progressColor="blue" size={75} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1250">
                        <Card name="Grammar" progress={45} borderColor="blue" progressColor="#0cf566" size={75} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1250">
                        <Card name="Pacing" progress={65} borderColor="blue" progressColor="#ffd819" size={75} />
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1250">
                        <Card name="Coherence" progress={55} borderColor="blue" progressColor="#5a189a" size={75} />
                    </div>
                </div>
            </div>

            {/* Text and suggestions container */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 border rounded shadow" data-aos='fade-down' data-aos-delay="500" data-aos-duration="1500">
                        <h3>Transcript</h3>
                        <div className=" p-3 overflow-auto shadow" style={{ maxHeight: '175px', maxWidth: '100%' }}>
                            <p id='transcript'>{transcript}</p>
                        </div>
                    </div>
                    <div className="col-6 border rounded shadow" data-aos='fade-down' data-aos-delay="500" data-aos-duration="1500">
                        <h3>Suggestions</h3>
                        <p>Some suggestions here</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Summary;
