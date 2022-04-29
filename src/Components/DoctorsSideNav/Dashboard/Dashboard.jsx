import React from "react";
import { Col, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <Row>
        <Col xs={10} md={3} className=" m-3 border border-danger">
          <h1>THis is for navbar</h1>
        </Col>

        <Col xs={12} md={8} className=" mt-3 border border-danger">
          {/* <ProfileSetting /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
