import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';  // Import Bootstrap components

const Analyze = (props) => {

  //const [component, setComponent] = useState(<Timer/>);

  // Function to handle button click

  return (
    <Container className="py-5 mt-5"
      data-aos='zoom-in'
      data-aos-duration="1000">
      <Row>
        {/* Text Section */}
        <Col className="text-center mt-4"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h1>Analyze Your Presentation</h1>
          <p>
            Use the button below to begin analyzing your presentation. The platform will assess aspects of the speech such as 
            clarity, fluency, pacing, and coherence.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4"
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        {/* Button */}
        <Col xs="auto">
          <Button variant="primary" size="lg" onClick={() =>{
            props.setPage('timer');
          }}>
            Start Analysis
          </Button>
        </Col>
      </Row>

      {/* Additional Text Section */}
      <Row className="mt-5" 
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <Col className="text-center">
          <h3>How It Works</h3>
          <p>
            The analysis will provide real-time feedback on the speaking performance. Click the button above to get started.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Analyze;
