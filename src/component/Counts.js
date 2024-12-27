import React from 'react';
import { Row, Col } from "react-bootstrap";
const Counts = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col className=" p-3" sm="8">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default Counts;