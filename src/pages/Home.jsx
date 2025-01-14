import React from 'react';
import image from '../assets/bg.jpg';

const Home = (props) => {
  return (
    <div
      className="container-fluid py-5 mt-5 position-relative"
      data-aos="zoom-in"
      data-aos-duration="500"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "100vw",
      }}
    >
      {/* Darker Transparent Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",

        }}
      ></div>

      {/* Content */}
      <div className="row position-relative text-light">
        <div className="col-12 text-center"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)", // Subtle text shadow
          }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h1
            className="mt-3 mb-4"
          >
            Welcome to Guide & Grade
          </h1>

          <p
            className="lead"
          >
            Revolutionize your presentations with real-time feedback and speech analysis. Master clarity, fluency, pacing, and engagement.
          </p>
          <p
            className="lead"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", // Subtle text shadow
            }}
          >
            Whether you're preparing for a pitch, a presentation, or refining your speaking skills, Guide & Grade is here to help you succeed.
          </p>
          <a
            href="#features"
            className="btn btn-primary btn-lg mt-5 mb-3"
            onClick={() => {
              console.log("explore features");
              props.setPage("analyze");
            }}
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="row mt-3 justify-content-center text-light position-relative"
      >
        <div
          className="col-12 col-md-4 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add slight background to feature boxes
            padding: "1rem",
          }}
        >
          <h3
            className="mt-3 mb-3"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            Real-time Feedback
          </h3>
          <p>Get instant insights to improve your speaking skills.</p>
        </div>

        <div
          className="col-12 col-md-4 text-center mb-4 shadow"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add slight background to feature boxes
            padding: "1rem",
          }}
        >
          <h3
            className="mt-3 mb-3"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            Speech Analysis
          </h3>
          <p>Analyze your speech patterns to enhance clarity and pacing.</p>
        </div>

        <div
          className="col-12 col-md-4 text-center mb-4 shadow"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add slight background to feature boxes
            padding: "1rem",
          }}
        >
          <h3
            className="mt-3 mb-3"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
          >
            Engagement Tracking
          </h3>
          <p>Measure your audience's engagement with your presentation.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
