import React from 'react';
import image from '../assets/bg.jpg';
const Home = (props) => {

  return (

    <div
      className="container py-5 mt-5 bg-image"
      data-aos='zoom-in'
      data-aos-duration='500'
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}

    >


      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >Welcome to Guide & Grade</h1>

          <p className="lead"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Revolutionize your presentations with real-time feedback and speech analysis. Master clarity, fluency, pacing, and engagement.
          </p>
          <p className="lead"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Whether you're preparing for a pitch, a presentation, or refining your speaking skills, Guide & Grade is here to help you succeed.
          </p>
          <a href="#features"
            className="btn btn-primary btn-lg mt-5 mb-3"
            onClick={() => {
              console.log("explore features");

              props.setPage('analyze');
            }}
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Explore Features</a>
        </div>
      </div>

      {/* Example Features Section */}
      <div id="features" className="row mt-3 justify-content-center">

        <div className="col-12 col-md-4 text-center mb-4 border rounded shadow"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h3 className="mt-3 mb-3">Real-time Feedback</h3>
          <p>Get instant insights to improve your speaking skills.</p>
        </div>

        <div className="col-12 col-md-4 text-center mb-4 border rounded shadow"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <h3 className="mt-3 mb-3">Speech Analysis</h3>
          <p>Analyze your speech patterns to enhance clarity and pacing.</p>
        </div>

        <div className="col-12 col-md-4 text-center mb-4 border rounded shadow"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <h3 className="mt-3 mb-3">Engagement Tracking</h3>
          <p>Measure your audience's engagement with your presentation.</p>
        </div>
      </div>



    </div>

  );
};

export default Home;
