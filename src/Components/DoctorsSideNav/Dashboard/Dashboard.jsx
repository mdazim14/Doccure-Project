import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar";
import TabsList from "./TabsList";
import TabContent from "./TabContent";

const Dashboard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<<<<<<< HEAD
    <div>
      <h1>DashBoard</h1>
      <Row>
        <Col className="border p-3 d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: 100 }}>
              <CircularProgressbar
                styles={buildStyles({
                  //   pathColor: `rgba(60, 242, 80, 1)`
                  pathColor: `rgba(53, 5, 189, 1)`,
                })}
                value={32}
              />
            </div>
          </div>
          <div className="ms-4">
            <p>Total Patient</p>
            <h3>1500</h3>
            <p>Till Today</p>
          </div>
        </Col>

        <Col className="border p-3 d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: 100, color: "red" }}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: `rgba(60, 242, 80, 1)`,
                })}
                value={86}
              />
            </div>
          </div>
          <div className="ms-4">
            <p>Total Patient</p>
            <h3>1500</h3>
            <p>Till Today</p>
          </div>
        </Col>

        <Col className="border p-3 d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: 100, color: "red" }}>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: `#ec8a12`,
                })}
                value={51}
              />
            </div>
          </div>
          <div className="ms-4">
            <p>Total Patient</p>
            <h3>1500</h3>
            <p>Till Today</p>
          </div>
        </Col>

        <div className="m-5">
          <h3>Patient Appoinment</h3>
        </div>

        <div>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              backgroundColor: "white",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{
                      fontWeight: "bold",
                      fontSize: 13,
                      p: 3,
                      width: 220,
                      border: 1,
                      borderRadius: 50,
                    }}
                    label="Upcoming"
                    value="1"
                  />
                  <Tab
                    sx={{
                      fontWeight: "bold",
                      fontSize: 13,
                      p: 3,
                      width: 220,
                      border: 1,
                      borderRadius: 50,
                    }}
                    label="Today"
                    value="2"
                  />
                </TabList>
              </Box>

              <TabPanel sx={{ textAlign: "left" }} value="1">
                {" "}
                <Row className="d-flex fw-bold m-2 p-3">
                  <Col md={2}>Patient Name</Col>
                  <Col md={2}>Appt Date</Col>
                  <Col md={2}>Purpose</Col>
                  <Col md={2}>Type</Col>
                  <Col md={2}>Paid Amount</Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-center border m-1 p-3">
                  <Col md={3} className=" d-flex ">
                    <p className="p-3">image</p>
                    <div>
                      <h6>Richard WIlson</h6>
                      <small>#PT0016</small>
                    </div>
                  </Col>
                  <Col>
                    <p>11 NOV 2022</p>
                    <small className="text-info">10.10 AM</small>
                  </Col>
                  <Col>General</Col>
                  <Col>New Patient</Col>
                  <Col>Paid Amount</Col>
                  <Col>$150</Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <div className="d-flex p-2 ">
                      <p className="text-info p-2">View</p>

                      <p className="text-info p-2">Accept</p>

                      <p className="text-danger p-2">Cancel</p>
                    </div>
                  </Col>
                </Row>

              </TabPanel>
              <TabPanel sx={{ textAlign: "left" }} value="2">
                {" "}
                <Row className="d-flex fw-bold m-2 p-3">
                  <Col>Patient Name</Col>
                  <Col>Appt Date</Col>
                  <Col>Purpose</Col>
                  <Col>Type</Col>
                  <Col>Paid Amount</Col>
                  <Col></Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center border m-1 p-3">
                  <Col className=" d-flex ">
                    <p className="p-3">image</p>
                    <div>
                      <h6>Richard WIlson</h6>
                      <small>#PT0016</small>
                    </div>
                  </Col>
                  <Col>
                    <p>11 NOV 2022</p>
                    <small className="text-info">10.10 AM</small>
                  </Col>
                  <Col>General</Col>
                  <Col>New Patient</Col>
                  <Col>Paid Amount</Col>
                  <Col>$150</Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <div className="d-flex p-2 ">
                      <p className="text-info p-2">View</p>

                      <p className="text-info p-2">Accept</p>

                      <p className="text-danger p-2">Cancel</p>
                    </div>
                  </Col>
                </Row>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </Row>
=======
    <div className="m-3 p-2">
      <ProgressBar />
      <div className="mt-5 mb-3">
        <h3>Patient Appoinment</h3>
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            backgroundColor: "white",
          }}
        >
          <TabContext value={value}>
            <TabsList handleChange={handleChange} />
            <TabPanel sx={{ textAlign: "left" }} value="1">
              <TabContent />
            </TabPanel>
            <TabPanel sx={{ textAlign: "left" }} value="2">
              <TabContent />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
>>>>>>> babc0f277b50bd891bcfe188b9e4f9b641311e1d
    </div>
  );
};

export default Dashboard;
