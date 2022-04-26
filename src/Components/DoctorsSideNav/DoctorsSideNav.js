import React from 'react';
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ProfileSetting from './ProfileSetting/ProfileSetting';

const DoctorsSideNav = () => {

    const history = useHistory();

    const handleSideNav = (slug) => {
        history.push(slug);
        console.log(slug);
    };


    return (
        <div>
            <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
                <div>
                    <small>Home / Doctor Profile</small>
                </div>
                <h5>Doctor Profile</h5>
            </div>
            <Row>
                <Col xs={3} md={2} className=" border border-danger">
                    <Card>
                        <div className=" text-center img-rounded">
                            <Image roundedCircle width={100} src="/images/Doctor Image.jpg" alt="" />
                        </div>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <ListGroup variant="flush" className="text-start ">
                        <ListGroup.Item onClick={() => handleSideNav('/dashboard')} > Dashboard</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/appoinments')}> Appointments</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/myPatients')}> My Patients</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/scheduleTiming')}> Schedule Timings</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/invoices')}> Invoices</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/reviews')}> Reviews</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/profileSetting')}> Profile Setting</ListGroup.Item>
                        <ListGroup.Item onClick={() => handleSideNav('/changePassword')}> Change Password</ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col xs={7} md={8} className="border border-danger">
                    <ProfileSetting></ProfileSetting>
                </Col>

            </Row>

        </div>
    );
};

export default DoctorsSideNav;