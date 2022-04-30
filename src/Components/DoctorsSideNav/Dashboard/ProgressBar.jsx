import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Row, Col } from "react-bootstrap";

const ProgressBar = () => {
  return (
    <Row className="max-auto w-100">
      <Col md={4}>
        <Row>
          <Col md={5}>
            <CircularProgressbar
              styles={buildStyles({
                //   pathColor: `rgba(60, 242, 80, 1)`
                pathColor: `rgba(53, 5, 189, 1)`,
              })}
              value={82}
            />
          </Col>
          <Col md={7}>
            <p>Total Patient</p>
            <h3>160</h3>
            <p>Till Today</p>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <Row>
          <Col md={5}>
            <CircularProgressbar
              styles={buildStyles({
                //   pathColor: `rgba(60, 242, 80, 1)`
                pathColor: `#ce320f`,
              })}
              value={32}
            />
          </Col>
          <Col md={7}>
            <p>Today Patient</p>
            <h3>160</h3>
            <p>06, Nov 2019</p>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <Row>
          <Col md={5}>
            <CircularProgressbar
              styles={buildStyles({
                //   pathColor: `rgba(60, 242, 80, 1)`
                pathColor: `#00aeab`,
              })}
              value={22}
            />
          </Col>
          <Col md={7}>
            <p>Appointments</p>
            <h3>70</h3>
            <p>06, Nov 2019</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProgressBar;
