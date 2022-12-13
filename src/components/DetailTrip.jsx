import React from 'react'
import { Stack, Button } from 'react-bootstrap'

import coverdetail from '../assets/images/detailTrip/coverdetail.png'
import detailTrip1 from '../assets/images/detailTrip/detailTrip1.png'
import detailTrip2 from '../assets/images/detailTrip/detailTrip2.png'
import detailTrip3 from '../assets/images/detailTrip/detailTrip3.png'

import hotelIcon from '../assets/images/detailTrip/hotelIcon.png'
import mealIcon from '../assets/images/detailTrip/mealIcon.png'
import planeIcon from '../assets/images/detailTrip/planeIcon.png'
import timeIcon from '../assets/images/detailTrip/timeIcon.png'
import dateIcon from '../assets/images/detailTrip/dateIcon.png'

export default function DetailTrip() {
    return (
        <>
            <section className=''>
                <div className='d-flex justify-content-center' >
                    <div className=' w-75'>
                        <h3>
                            6D/4N Fun Tassie Vacation + Sydney
                        </h3>
                        <p>
                            Australia
                        </p>
                    </div>
                </div>

                <Stack gap={2}>
                    <div className=" text-center">
                        <img src={coverdetail} alt=''></img>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <Stack direction="horizontal" gap={3}>
                            <div className="">
                                <img src={detailTrip1} alt=''></img>
                            </div>
                            <div className="">
                                <img src={detailTrip2} alt=''></img>
                            </div>
                            <div className="">
                                <img src={detailTrip3} alt=''></img>
                            </div>
                        </Stack>
                    </div>
                </Stack>




            </section>

            <section >

                <div className='d-flex justify-content-center'>
                    <p className=' fs-5 fw-bold w-75 pt-2 '>
                        Information Trip
                    </p>
                </div>

                <div className="d-flex justify-content-center">
                    <Stack className=" w-75 d-flex justify-content-between" direction="horizontal" gap={5}>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Accomodation</p>
                            <img src={hotelIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>Hotel 4 Nights</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Transportation</p>
                            <img src={planeIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>Qatar Airways</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Eat</p>
                            <img src={mealIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>Included as Itenarary</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Duration</p>
                            <img src={timeIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>6 Day 4 Night</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Date Trip</p>
                            <img src={dateIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>26 August 2020</span>
                        </div>
                    </Stack>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='w-75 mt-4'>
                        <p className='fw-bold text-grey'>
                            Description
                        </p>
                        <p className='text-grey2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste facere eveniet neque earum error voluptas aliquam eos dignissimos, accusantium soluta voluptatum commodi adipisci tempora molestiae doloremque est ipsum iure! Rerum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius reprehenderit dolores, ex reiciendis rem illo necessitatibus ullam optio, quidem exercitationem nesciunt beatae odio recusandae, maiores ipsum porro sint dolor!
                        </p>
                    </div>
                </div>

            </section>

            <section  >
                <div className='d-flex justify-content-center' >
                    <Stack className=' d-flex justify-content-between w-75' direction="horizontal" gap={2}>
                        <div className="">
                            <span className='fw-bold text-warning' >IDR. 12.398.000</span>
                            <span className='fw-bold'>/ Person</span>
                        </div>
                        <div className="">
                            <Button className='text-white fw-bold' variant="warning">
                                -
                            </Button>
                            <span className='ms-2 me-2 fw-bold'>
                                1
                            </span>
                            <Button className='text-white fw-bold' variant="warning">
                                +
                            </Button>
                        </div>
                    </Stack>
                </div>

                <div className='d-flex justify-content-center mt-2'>
                    <Stack className=' d-flex justify-content-between w-75' direction="horizontal" gap={2}>
                        <div className="fw-bold">
                            Total:
                        </div>
                        <div className="fw-bold text-warning">
                            IDR. 12.398.000
                        </div>
                    </Stack>

                </div>
                <div className='d-flex justify-content-center mt-5' >
                    <p className='w-75 text-end'>
                        <Button className='text-white fw-bold ps-4 pe-4' variant="warning">Book Now</Button>
                    </p>
                </div>

            </section>

        </>
    )
}
