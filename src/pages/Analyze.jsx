import React from 'react';
import image from '../assets/bg.jpg';  // Import image

const Analyze = (props) => {

  //const [component, setComponent] = useState(<Timer/>);

  // Function to handle button click

  return (
    <div
      className="container-fluid py-5 mt-5 position-relative"
      data-aos='zoom-in'
      data-aos-duration="1000"
      style={{
        //backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "100vw",
      }}
    >
      <div className="row">
        <div
          className="col text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h1>Analyze Your Presentation</h1>
          <p>
            Use the button below to begin analyzing your presentation. The platform will assess aspects of the speech such as
            clarity, fluency, pacing, and coherence.
          </p>

        </div>
      </div>

      <div
        className="row justify-content-center mt-4"
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <div className="col" xs="auto">
          <button className="btn btn-primary" size="lg" onClick={() => {
            props.setPage('timer');
          }}>
            Start Analysis
          </button>
        </div>
      </div>

      <div
        className="row mt-5"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="col text-center">
          <h3>How It Works</h3>
          <p>
            The analysis will provide real-time feedback on the speaking performance. Click the button above to get started.
          </p>
        </div>

      </div>

    </div>

  );
};

export default Analyze;
