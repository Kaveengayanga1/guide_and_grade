import React from 'react';
import image from '../assets/bg.jpg';  // Import image

const Analyze = (props) => {

  //const [component, setComponent] = useState(<Timer/>);

  // Function to handle button click

  return (
    <div
      className="container-fluid py-5 mt-5 position-relative start-0 top-0"
      data-aos='zoom-in'
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
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      ></div>

      <div className="container rounded mt-5 text-light position-relative z-index-3" 
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Add slight background to feature boxes
          padding: "1rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)", // Subtle text shadow
        }}
      >

        <div className="row">
          <div className="col"></div>
          <div
            className="col-10 text-center mt-3"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h1>Analyze Your Presentation</h1>
            <p className='lead mt-2'>
              Use the button below to begin analyzing your presentation. The platform will assess aspects of the speech such as
              clarity, fluency, pacing, and coherence.
            </p>

          </div>
          <div className="col"></div>
        </div>
        <div className="row text-light">
          <div className="col text-center">
            <a
              href="#features"
              className="btn btn-primary btn-lg mt-3 mb-3"
              onClick={() => {
                console.log("timer loaded");
                props.setPage("timer");
              }}
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Start Analyze
            </a>
          </div>
        </div>
        <div className="row mt-2 mb-4"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <div className="col"></div>
          <div className="col-10 text-center">
            <h3>How It Works</h3>
            <p className='lead'>
              The analysis will provide real-time feedback on the speaking performance. Click the button above to get started.
            </p>
          </div>
          <div className="col"></div>

        </div>

      </div>



    </div>

  );
};

export default Analyze;
