import React from 'react';
import Analyze from './Analyze';

const Home = (props) => {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-4">Welcome to Guide & Grade</h1>
          <p className="lead">
            Revolutionize your presentations with real-time feedback and speech analysis. Master clarity, fluency, pacing, and engagement.
          </p>
          <p className="lead mb-5">
            Whether you're preparing for a pitch, a presentation, or refining your speaking skills, Guide & Grade is here to help you succeed.
          </p>
          <a href="#features" className="btn btn-primary btn-lg mt-5 mb-3" onClick={() => {
            <Analyze/>
          }}>Explore Features</a>
        </div>
      </div>

      {/* Example Features Section */}
      <div id="features" className="row mt-3">
        <div className="col-12 col-md-4 text-center mb-4">
          <h3>Real-time Feedback</h3>
          <p>Get instant insights to improve your speaking skills.</p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <h3>Speech Analysis</h3>
          <p>Analyze your speech patterns to enhance clarity and pacing.</p>
        </div>
        <div className="col-12 col-md-4 text-center mb-4">
          <h3>Engagement Tracking</h3>
          <p>Measure your audience's engagement with your presentation.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
