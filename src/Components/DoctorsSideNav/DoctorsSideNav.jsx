import React, { useState } from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { profileSideNavData } from "../../utils/profile.constants";
import Dashboard from "./Dashboard/Dashboard";
import ProfileSetting from "./ProfileSetting/ProfileSetting";

const DoctorsSideNav = () => {
  console.log("sddasg");
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState("");
  const handleMenuActive = (slug) => {
    if (slug === history?.location?.pathname) {
      setActiveMenu(slug);
    }
  };

  return (
    <Wrapper>
      <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
        <div>
          <small>Home </small>
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
            {profileSideNavData?.map((el, i) => {
              return (
                <button
                  key={i}
                  className={`${
                    el?.slug === history?.location?.pathname ||
                    el?.slug === activeMenu
                      ? "activeMenu"
                      : ""
                  } LinkButton`}
                  onClick={() => handleMenuActive(el?.slug)}
                >
                  <Link to={el?.slug}>{el?.value}</Link>
                </button>
              );
            })}
          </ListGroup>
        </Col>

        <Col xs={12} md={8} className=" mt-3 border border-danger">
          <Switch>
            <Route exact path="/doctorsidenav">
              <Dashboard />
            </Route>

            <Route exact path="/doctorsidenav/dashboard">
              <>
                <Dashboard />
              </>
            </Route>

            <Route exact path="/doctorsidenav/appoinments">
              <p>Hello appointments</p>
            </Route>

            <Route exact path="/doctorsidenav/profilesetting">
              <ProfileSetting></ProfileSetting>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DoctorsSideNav;

const Wrapper = styled.div`
  .LinkButton {
    border: none;
    text-align: left;
    margin-bottom: 0;
    &:hover {
      background-color: #c2c2c2;
      .list-group {
        a {
          color: #0058f0 !important;
        }
      }
    }
  }
  .activeMenu {
    background-color: #c2c2c2;
  }
  .list-group {
    a {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      padding: 0.625rem;
      color: #000000;
    }
  }
`;
