import React, { useState, useEffect } from 'react';
import Card from '../components/card/Card';  // Assuming Card component is imported
import '../Summary.css'
//const host = "https://guide-and-grade-api.onrender.com";
const host = "http://localhost:5000";
const Summary = (props) => {
    const [status1, setStatus1] = useState("processing");
    const [status2, setStatus2] = useState("processing");
    const [transcript, setTranscript] = useState("Loading...");
    const [report, setReport] = useState({});

    useEffect(() => {
        const eventSource = new EventSource(
          host+"/get-status"
        );
        if (typeof eventSource != undefined) {
          console.log("Connection with status successful");
          eventSource.onmessage = (event) => {
            const eventData = JSON.parse(event.data);
            
            setStatus1((prevStatus) => {
                console.log(prevStatus);
                if (prevStatus!= "completed" && eventData.status1 == "completed") {
                    console.log("Getting transcript");
                    getTranscript();
                }
                return eventData.status1;
            });
            setStatus2((prevStatus2) => {
                console.log(prevStatus2);
                if (prevStatus2!= "completed" && eventData.status2 == "completed") {
                    console.log("Getting report");
                    getReport();
                }
                return eventData.status1;
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
    const getReport = async () => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        fetch(host+"/get-report", requestOptions)
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                setReport(json);
            });
            
    }

    return (
        <div className="summary-container">
            <h1 className="title" data-aos="zoom-in" data-aos-duration="1000">Evaluation Results</h1>

            <div className="card-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                <div className="row transcript-container">
                    <div className="col-4 mt-5">
                        <Card name="Overall" progress={report && report.engagement && ((report.engagement.score+report.content.score+report.structure.score+report.delivery.score+report.accuracy.score)/5)} borderColor="white" progressColor="blue" size={75} />
                    </div>
                    <div className="col-8">
                        <div>
                            <h3>Transcript</h3>
                            <div className="transcript-content">
                                <p id='transcript'>{transcript}</p>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row transcript-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                    <h3>Content</h3>
                    <div className="col-4 mt-3">
                        <Card name="Content" progress={report && report.content && (report.content.score)} borderColor="blue" progressColor="#0cf566" size={75} />
                    </div>
                    <div className="col-8">
                        <div >
                            
                            <div className="transcript-content">
                                {report && report.content && (
                                    <>
                                        <p>Clarity: {report.content.clarity}</p>
                                        <p>Relevance: {report.content.relevance}</p>
                                        <p>Depth: {report.content.depth}</p>
                                        <p>Originality: {report.content.originality}</p>
                                    </>
                                )}
                                
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row transcript-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                    <h3>Engagement</h3>
                    <div className="col-4 mt-3">
                        <Card name="Engagement" progress={report && report.engagement && (report.engagement.score)} borderColor="blue" progressColor="orange" size={75} />
                    </div>
                    <div className="col-8">
                        <div >
                            <div className="transcript-content">
                            {report && report.engagement && (
                                    <>
                                        <p>Relatability: {report.engagement.relatability}</p>
                                        <p>CallToAction: {report.engagement.callToAction}</p>
                                        <p>Stroytelling: {report.engagement.storytelling}</p>
                                    </>
                                )}
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row transcript-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                    <h3>Accuracy</h3>
                    <div className="col-4 mt-3">
                        <Card name="Accuracy" progress={report && report.accuracy && (report.accuracy.score)} borderColor="blue" progressColor="purple" size={75} />
                    </div>
                    <div className="col-8">
                        <div >
                            
                            <div className="transcript-content">
                            {report && report.accuracy && (
                                    <>
                                        <p>Grammar and syntax: {report.accuracy.grammarAndSyntax}</p>
                                        <p>Factual accuracy: {report.accuracy.factualAccuracy}</p>
                                    </>
                                )}
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row transcript-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                    <h3>Structure</h3>
                    <div className="col-4 mt-3">
                        <Card name="Structure" progress={report && report.structure && (report.structure.score)} borderColor="blue" progressColor="green" size={75} />
                    </div>
                    <div className="col-8">
                        <div >
                            
                            <div className="transcript-content">
                                {report && report.structure && (
                                    <>
                                        <p>Organization: {report.structure.organization}</p>
                                        <p>Transitions: {report.structure.transitions}</p>
                                        <p>Timing: {report.structure.timing}</p>
                                    </>
                                )}
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="row transcript-container" data-aos="fade-in" data-aos-delay="20" data-aos-duration="100">
                    <h3>Delivery</h3>
                    <div className="col-4 mt-3">
                        <Card name="Delivery" progress={report && report.delivery && (report.delivery.score)} borderColor="blue" progressColor="brown" size={75} />
                    </div>
                    <div className="col-8">
                        <div >
                            
                            <div className="transcript-content">
                                {report && report.delivery && (
                                    <>
                                        <p>Tone: {report.delivery.tone}</p>
                                        <p>Language: {report.delivery.language}</p>
                                        <p>Pacing and Rhythm: {report.delivery.pacingAndRhythm}</p>
                                    </>
                                )}
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
