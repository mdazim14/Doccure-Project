import React from 'react';
import { Box, Button, Container, Grid, Rating, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

import RoomIcon from '@material-ui/icons/Room';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import './DoctorCarusel.css'

import dortorimg from '../../../../images/doctor-03.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation } from "swiper";
import { NavLink } from 'react-router-dom';

const doctorinfo = [
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
    {
        name: 'abul',
        id: '1',
        expert: "medicine"
    },
]




export default function DoctorCarusel() {
    return (
        <>
            <Swiper

                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
                // slidesPerView={3}
                spaceBetween={30}
                freeMode={true}

                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                <Grid container spacing={2}>
                    {
                        doctorinfo.map(drinfo =>

                            <Grid item xs={12} md={4}>
                                <SwiperSlide>
                                    <Box sx={{
                                        borderColor: 'primary.main'
                                        }}>
                                        <Box className='doc-img' sx={{
                                            background: '#FFFFFF',
                                            // boxShadow: '0px 0px 10px rgb(0 0 0 / 11%)',
                                            borderRadius: '5px',
                                            minWidth: '100%',
                                            height: '100%',
                                            // margin: '10px',
                                            marginBottom: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                            borderColor: 'primary.main'
                                        }}>
                                            <img className='doctorimg' src={dortorimg} alt="" srcset="" />
                                        </Box>
                                        <Box sx={{
                                            textAlign: 'start'
                                        }} className='doc-content'>
                                            <Typography variant="h5" gutterBottom component="div">
                                                Deborah Angel
                                            </Typography>
                                            <Typography sx={{ mt: 2 }} variant="body2" gutterBottom component="div">
                                                MBBS, MD - General Medicine, DNB - Cardiology
                                            </Typography>
                                            <Rating name="read-only" value={5} readOnly />

                                            <Box sx={{
                                                display: 'flex',
                                                mt: 1,
                                                color:"#757575"
                                            }}>
                                                <RoomIcon  />
                                                <Typography sx={{ ml: 1 }} variant="body2" gutterBottom component="div">
                                                    Georgia, USA
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                mt: 1,
                                                color:"#757575"
                                            }}>
                                                <QueryBuilderIcon />
                                                <Typography sx={{ ml: 1 }} variant="body2" gutterBottom component="div">
                                                Available on Fri, 22 Mar
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                mt: 1,
                                                color:"#757575"
                                            }}>
                                                <LocalAtmIcon />
                                                <Typography sx={{ ml: 1 }} variant="body2" gutterBottom component="div">
                                                $150 - $250
                                                </Typography>
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                mt: 1
                                            }}>
                                                <Button sx={{ m: 1, mx: "auto" }} variant="outlined" size="small">
                                                    <Link to="/doctordetails">View Profile</Link>
                                                </Button>
                                                <Button sx={{ m: 1, mx: "auto" }} variant="contained" size="small">Book Now</Button>

                                            </Box>

                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            </Grid>
                        )
                    }

                </Grid>






            </Swiper>
        </>
    );
}
