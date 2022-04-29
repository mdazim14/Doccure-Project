import React from "react";
import { Col, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>DashBoard</h1>
      <Row>
        <Col className="border p-3 d-flex">
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: 100 }}>
              <CircularProgressbar
                styles={buildStyles({
                //   pathColor: `rgba(60, 242, 80, 1)`
                  pathColor: `rgba(53, 5, 189, 1)`                  
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
                  pathColor: `rgba(60, 242, 80, 1)`                
                })}
              value={86} />
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
                pathColor: `#ec8a12`                
              })}
              value={51} />
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
                Tabs Upcoming{" "}
              </TabPanel>
              <TabPanel sx={{ textAlign: "left" }} value="2">
                {" "}
                Tabs Today{" "}
              </TabPanel>
              <TabPanel value="4"> Tabs </TabPanel>
            </TabContext>
          </Box>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
