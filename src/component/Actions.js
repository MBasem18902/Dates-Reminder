import React from "react";
import { Row, Col } from "react-bootstrap";
const Actions = ({ deteleData , viewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col className="d-flex justify-content-between" sm="8">
        <button onClick={viewData} className="btn-style p-2">
          عرض البيانات{" "}
        </button>
        <button onClick={deteleData} className="btn-style p-2">
          مسح الكل{" "}
        </button>
      </Col>
    </Row>
  );
};

export default Actions;
