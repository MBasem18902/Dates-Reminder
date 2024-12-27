import React from "react";
import { Row, Col } from "react-bootstrap";
const Lists = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col className="" sm="8">
        <div className="rectangle">
          {person.length ? (
            person.map((e) => (
              <div key={e.id} className="d-flex mx-3 py-3 border-bottom">
                <img className="img-avatar" src={e.img} alt="ldkjfkl" />
                <div className="px-3">
                  <p className="d-inline fs-5 ">{e.name}</p>
                  <p className="fs-6">{e.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-center p-5">لا توجد مواعيد اليوم </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Lists;
