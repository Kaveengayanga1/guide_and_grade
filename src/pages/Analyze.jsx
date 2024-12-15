import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';  // Import Bootstrap components
import Timer from './timer';

const Analyze = () => {

  //const [component, setComponent] = useState(<Timer/>);

  // Function to handle button click
  const handleAnalyzeClick = () => {
    <Timer/>
  };

  return (
    <Container className="py-5 mt-5"
      data-aos='zoom-in'
      data-aos-delay="400">
      <Row>
        {/* Text Section */}
        <Col className="text-center mt-4">
          <h1>Analyze Your Presentation</h1>
          <p>
            Use the button below to begin analyzing your presentation. The platform will assess aspects such as 
            clarity, fluency, pacing, and coherence.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        {/* Button */}
        <Col xs="auto">
          <Button variant="primary" size="lg" onClick={handleAnalyzeClick}>
            Start Analysis
          </Button>
        </Col>
      </Row>

      {/* Additional Text Section */}
      <Row className="mt-5">
        <Col className="text-center">
          <h3>How It Works</h3>
          <p>
            The analysis will provide real-time feedback to help you improve your speaking performance. Click the button above to get started.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Analyze;
