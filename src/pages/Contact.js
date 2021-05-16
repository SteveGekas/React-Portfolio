import React from "react";
import { Container, Row, Col, Card } from "../components/Project";
import Footer from "../components/Footer";

const Contact = () => {
    return(
        <div>
  <Container>
       <Card>
    <Row>
    <Col size="md-12">
       
        <div className="card-header text-center">
            Contact Me
          </div>
          </Col>
       
          <Col size="md-12">
          <div className="card-body">

          <p className="blockquote text-center" id="homeSubHeader">
            Email: &nbsp;
            <a href="mailto:s.gekas9@gmail.com"> s.gekas9@gmail.com</a>
          </p>

          <p className="blockquote text-center" id="homeSubHeader">
            Phone: (484)-557-9366
          </p>
          </div>
          </Col>
      
   
    </Row>
    </Card>
  </Container>
  <Footer></Footer>
  </div>
  )
};
export default Contact;