import React from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import ProfileSetting from "./ProfileSetting/ProfileSetting";

const DoctorsSideNav = () => {
  // const history = useHistory();

  // const handleSideNav = (slug) => {
  //   history.push(slug);
  //   console.log(slug);
  // };

  return (
    <div>
      <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
        <div>
          <small>Home / Doctor Profile</small>
        </div>
        <h5>Doctor Profile</h5>
      </div>

      <Row>
        <Col xs={10} md={3} className=" m-3 border border-warning">
          <Card>
            <div className=" text-center img-rounded">
              <Image
                roundedCircle
                width={100}
                src="/images/Doctor Image.jpg"
                alt=""
              />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example</Card.Text>
            </Card.Body>
          </Card>

          <ListGroup variant="flush" className="text-start ">
            <Link className="text-decoration-none"  to="/doctorsidenav/dashboard"> Dashboard</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/appoinments"> Appointments</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/myPatients"> My Patients</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/scheduleTiming"> Schedule Timings</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/invoices"> Invoices</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/reviews"> Reviews</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/profileSetting"> Profile Setting</Link>
            <Link className="text-decoration-none"  to="/doctorsidenav/changePassword"> Change Password</Link>
          </ListGroup>
        </Col>

        <Col xs={12} md={8} className=" mt-3 border border-danger">
         
         <Dashboard></Dashboard>
          {/* <ProfileSetting></ProfileSetting> */}


        </Col>
      </Row>
    </div>
  );
};

export default DoctorsSideNav;
