import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import styled from "styled-components";

const patientsData = [
  {
    ID: 1,
    PatientName: "Azim Wilson",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
  {
    ID: 2,
    PatientName: "Mahee Wilson",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
  {
    ID: 3,
    PatientName: "Suzon watson",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
  {
    ID: 4,
    PatientName: "Asik WIlliM",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
  {
    ID: 5,
    PatientName: "Asik WIlliM",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
  {
    ID: 6,
    PatientName: "nASUM TAIOM",
    PatientID: "P4578",
    PatientAddress: "Alabarna, USA",
    PatientPhone: +4541234578,
    PatientAge: "38 Years",
    PatientSex: "Male",
    PatientBlood: "AB+",
  },
];

const MyPatients = () => {
  return (
    <div className="d-flex">

      {patientsData.map((el, i) => {
        return (
          <div>
            <Card
              style={{
                width: "18rem",
                border: "1px solid red",
                textAlign: "center",
                margin: "10px",
              }}
            >
              <Card.Img
                as={Image}
                variant="top"
                className="rounded-circle"
                src="../../../images/patient-word.svg"
              />
              <Card.Body>
                <Card.Title key={i}>{el?.PatientName}</Card.Title>
                <Card.Text>
                  <p>Patient ID: P0016</p>
                  <p>Alabarna, USA</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Row>
                  <Col className="text-start ps-4">
                    <p>Phone</p>
                    <p>Age</p>
                    <p>Blood Group</p>
                  </Col>
                  <Col>
                    <p>+157 840 6574</p>
                    <p>38 Years, Male</p>
                    <p>AB+</p>
                  </Col>
                </Row>
              </ListGroup>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const Image = styled.img`
  max-width: 100px;
  margin: auto;
`;

export default MyPatients;
