import React from 'react';
import { Card, Col, Container, Form, FormControl, Image, InputGroup, ListGroup, Row } from 'react-bootstrap';

const ProfileSetting = () => {
    return (
        <div>
            <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
                <div>
                    <small>Home / Doctor Profile</small>
                </div>
                <h5>Doctor Profile</h5>
            </div>

            <Row>

                <Col xs={6} md={3} className=" border border-danger mt-3 ms-5 ">
                    <Card>
                        <div className=" text-center img-rounded">
                            <Image roundedCircle width={100} src="/images/pic4.jpg" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <ListGroup variant="flush" className="text-start">
                        <ListGroup.Item> Dashboard</ListGroup.Item>
                        <ListGroup.Item> Appointments</ListGroup.Item>
                        <ListGroup.Item> My Patients</ListGroup.Item>
                        <ListGroup.Item> Schedule Timings</ListGroup.Item>
                        <ListGroup.Item> Invoices</ListGroup.Item>
                        <ListGroup.Item> Reviews</ListGroup.Item>
                        <ListGroup.Item> Change Password</ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col xs={12} md={8} className="border border-danger m-3">
                    <div>

                        <div className="text-start pb-4">
                            <h5>Basic Information</h5>
                            <div className="text-start">
                                <Image rounded width={90} src="/images/pic4.jpg" alt="" />
                                <div>
                                    <Form.Group controlId="formFileLg" className="mb-3">
                                        <Form.Control type="file" size="sm" />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>


                        <div className="d-flex">
                            <div className="col-md-6">
                                <div className="m-2 p-2 border">
                                    <p className="text-start">Username</p>
                                    <InputGroup size="lg">
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>

                                <div className="m-2 p-2 border">
                                    <p className="text-start">First Name</p>
                                    <InputGroup size="lg">
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>

                                <div className="m-2 p-2 border">
                                    <p className="text-start">Phone Number</p>
                                    <InputGroup size="lg">
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>

                            </div>



                            <div className="col-md-6">
                                <div className="m-2 p-2 border">
                                    <p className="text-start">Email</p>
                                    <InputGroup size="lg">
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>

                                <div className="m-2 p-2 border">
                                    <p className="text-start">Last Name</p>
                                    <InputGroup size="lg">
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>

                                <div className="m-2 p-2 border">
                                    <p className="text-start">Gender</p>
                                    <InputGroup size="lg">
                                        <Form.Select size="lg">
                                            <option disabled > - </option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Select>
                                    </InputGroup>
                                </div>

                            </div>



                        </div>

                    </div>


                </Col>

            </Row>

        </div>
    );
};

export default ProfileSetting;