import React from 'react';
import image from '../assets/bg.jpg';

const About = () => {
  return (
    <div className="container-fluid py-5 mt-5 position-relative"
      data-aos='zooms-in'
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "100vw",
      }}
    >

      <div className="row mt-5"></div>
      <h1 className="mt-5 mb-4 d-flex justify-content-center text-light"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle text shadow
        }}
      >
        About Guide & Grade
      </h1>

      <div className="row text-light"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1800"
      >
        <div className="col"></div>
        <div className="col-10  shadow"
          style={{
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)", // Subtle text shadow
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add slight background to feature boxes
            padding: "1rem",
          }}
        >
          <p className="lead">
            Welcome to Guide & Grade, where innovation meets effective communication! Our platform is designed to guide you on improving your presentation skills by grading your presentations. Using cutting-edge speech analysis technology, we provide real-time feedback and accurate grading to help you master clarity, fluency, pacing, and engagement.
          </p>
          <p className="lead">
            Whether you're practicing for an interview, a class presentation, or simply want to grade a presentation, Guide & Grade is your ultimate partner for success. Transform the way you present confidently, clearly, and powerfully.
          </p>
          <p className="lead">
            Let us guide you to your best presentation yet!
          </p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default About;
