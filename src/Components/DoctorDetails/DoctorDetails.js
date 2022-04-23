import React from 'react';
import DoctorImage from '../../images/doctor-03.jpg';


import RoomIcon from '@material-ui/icons/Room';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import DoctorsMainTabs from '../DoctorDetailsTabs/DoctorsMainTabs';
import GradeIcon from '@mui/icons-material/Grade';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const DoctorDetails = () => {
    return (
        <main style={{ backgroundColor: '#F8F9FA' }}>
            <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
                <div>
                    <p>Home / Doctor Profile</p>
                </div>
                <h3>Doctor Profile</h3>
            </div>

            {/* <container> */}

            <div className="d-flex border mt-4 container bg-white m-auto">

                <div className="col-8 text-start p-3 d-flex" >
                    <div className="p-4">
                        <img style={{ width: "150px" }} src={DoctorImage} alt="" />
                    </div>
                    <div>
                        <h2>Dr. Darren Elder</h2>
                        <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                        <div className="d-flex">
                            <p><i class="fa-solid fa-tooth"></i></p>
                            <p>Dentist</p>
                        </div>
                        <div className="d-flex">
                            <div className="text-warning">
                                <GradeIcon />
                                <GradeIcon />
                                <GradeIcon />
                                <GradeIcon />
                            </div>
                            <div style={{ Color: '#E0E0E0' }}>
                                <GradeIcon />
                            </div>
                        </div>
                        <div className="d-flex mt-2">
                            <RoomIcon />
                            <p>Newyark USA - Get Directions</p>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <div className="">
                            <button class="btn btn-primary me-3">Dental Filling</button>
                            <button class="btn btn-primary">Teeth Whitneing</button>
                        </div>
                    </div>
                </div>


                <div className="border col-4 m-2 text-start p-3">
                    <div className="d-flex">
                        <ThumbUpIcon className="text-info" />
                        <p> 99%</p>
                    </div>

                    <div className="d-flex">
                        <ChatBubbleIcon className="text-info" />
                        <p> 35 Feedback</p>
                    </div>
                    <div className="d-flex">
                        <RoomIcon className="text-info" />
                        <p> Newyork, USA</p>
                    </div>
                    <div className="d-flex">
                        <LocalAtmIcon className="text-info" />
                        <p>$100 per hour</p>
                    </div>
                    <div className="d-flex p-4 fw-bold">
                        <BookmarkBorderIcon className="text-info border ms-2" />
                        <ChatBubbleIcon className="text-info border ms-4" />
                        <CallIcon className="text-info border ms-4" />
                        <VideocamIcon className="text-info border ms-4" />
                    </div>
                    <button className="btn btn-primary btn-lg">Book Appointment</button>
                </div>

            </div>


            {/* Tabs Components */}
            <div className="border container mt-5">
                <DoctorsMainTabs></DoctorsMainTabs>
            </div>
        </main>
    );
};

export default DoctorDetails;