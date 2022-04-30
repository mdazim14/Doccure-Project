import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const AppoinmentsData = [
  {
    appoinmentId: 1,
    doctorName: "Richard Wilson",
    Time: "14 Nov 2019, 10.00 AM",
    Location: "Newyork, United States",
    doctorEmail: "richard@example.com",
    doctorPhone: "+1 923 582 3636",
  },
  {
    appoinmentId: 2,
    doctorName: "Devid Max",
    Time: "14 Nov 2019, 10.00 AM",
    Location: "Newyork, United States",
    doctorEmail: "maxblar@example.com",
    doctorPhone: "+1 784 782 9696",
  },
  {
    appoinmentId: 3,
    doctorName: "Rio Jonson",
    Time: "15 Nov 2019, 10.00 AM",
    Location: "Newyork, United States",
    doctorEmail: "richard@example.com",
    doctorPhone: "+1 7878 78 4575",
  },
  {
    appoinmentId: 4,
    doctorName: "Mahee Tolex",
    Time: "15 Nov 2019, 10.30 AM",
    Location: "Newyork, United States",
    doctorEmail: "richflora@example.com",
    doctorPhone: "+1 999 456 7878",
  },
  {
    appoinmentId: 5,
    doctorName: "Mireaz warner",
    Time: "16 Nov 2019, 11.00 AM",
    Location: "Newyork, United States",
    doctorEmail: "richard@example.com",
    doctorPhone: "+1 888 111 4575",
  },
];

const Appoinment = () => {
  return (
    <div>
      {AppoinmentsData.map((el, i) => {
        return (
          <div>
            <Row className="border p-1 text-center ">
              <Col md={8} className="d-flex align-items-center">
                <div>
                  <Image
                    style={{ width: "140px", height: "140px" }}
                    src="../../../images/Doctor Image.jpg"
                  ></Image>
                </div>
                <div className="d-flex flex-column p-3 text-start">
                  <h5>{el?.doctorName}</h5>
                  <small>{el?.Location}</small>
                  <small> {el?.doctorEmail}</small>
                  <small> {el?.doctorPhone}</small>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="m-2 text-info">View</div>
                <div className="m-2 text-info">Accept</div>
                <div className="m-2 text-danger">Cancel</div>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
export default Appoinment;
