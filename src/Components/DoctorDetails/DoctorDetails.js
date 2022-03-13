import React from 'react';
import DoctorImage from '../../images/doctor-03.jpg';


import RoomIcon from '@material-ui/icons/Room';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const DoctorDetails = () => {
    return (
        <main className="">
            <div className="text-start p-3 text-white ps-5 fw-bold bg-primary">
                <div>
                    <p>Home / Doctor Profile</p>
                </div>
                <h3>Doctor Profile</h3>
            </div>


            {/* <container> */}

            <div className="d-flex border mt-4 container m-auto">

                <div className="col-8 text-start p-3 d-flex" >
                    <div className="p-4">
                        <img style={{ width: "150px" }} src={DoctorImage} alt="" />
                    </div>
                    <div>
                        <h2>Dr. Darren Elder</h2>
                        <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                        <div className="d-flex">
                            <p>icon</p>
                            <p>Dentist</p>
                        </div>
                        <p>*****(35)</p>
                        <div className="d-flex">
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
                        <RoomIcon />
                        <p>99%</p>
                    </div>

                    <div className="d-flex">
                        <RoomIcon />
                        <p>$100 per hour</p>
                    </div>
                    <div className="d-flex">
                        <RoomIcon />
                        <p> 35 Feedback</p>
                    </div>
                    <div className="d-flex">
                        <RoomIcon />
                        <p> Newyork, USA</p>
                    </div>
                    <div className="d-flex">
                        <LocalAtmIcon />
                        <p>$100 per hour</p>
                    </div>
                    <div className="d-flex p-3 m-2 border">
                    <RoomIcon />
                    <RoomIcon />
                    <RoomIcon />
                    <RoomIcon />
                    </div>
                    <button className="btn btn-primary">Book Appointment</button>
                </div>



            </div>


            {/* </container> */}
        </main>
    );
};

export default DoctorDetails;