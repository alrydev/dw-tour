import React from 'react'
import { Card, Stack, Button } from 'react-bootstrap'

import { CgProfile } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import profileCard from '../assets/images/profileCard.png'

export default function CardProfile() {
    return (
        <>
            <div className='pt-3 pb-2 d-flex justify-content-center'>
                <Card body className='w-50'>
                    <div className='d-flex justify-content-between'>
                        <section>
                            <h2 className='mb-3 fw-bold'>Personal Info</h2>
                            <Stack gap={4}>
                                <div>
                                    <Stack direction="horizontal" gap={2}>
                                        <div className="fs-5">
                                            <CgProfile />
                                        </div>
                                        <div className="">
                                            <div>
                                                Alri Diputra
                                            </div>
                                            <span className='fw-light text-grey' >fullname</span>
                                        </div>
                                    </Stack>
                                </div>
                                <div className="">
                                    <Stack direction="horizontal" gap={2}>
                                        <div className="fs-5">
                                            <MdLocationOn />
                                        </div>
                                        <div className="">
                                            <div>
                                                Surabaya, Indonesia
                                            </div>
                                            <span className='fw-light text-grey' >address</span>
                                        </div>
                                    </Stack>
                                </div>
                                <div className="">
                                    <Stack direction="horizontal" gap={2}>
                                        <div className="fs-5">
                                            <MdEmail />
                                        </div>
                                        <div className="">
                                            <div>
                                                Alri@mail.com
                                            </div>
                                            <span className='fw-light text-grey' >email</span>
                                        </div>
                                    </Stack>
                                </div>
                                <div>
                                    <Stack direction="horizontal" gap={2}>
                                        <div className="fs-5">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="">
                                            <div>
                                                081274828373
                                            </div>
                                            <span className='fw-light text-grey' >phone</span>
                                        </div>
                                    </Stack>
                                </div>
                            </Stack>
                        </section>

                        <section className='pe-5 me-2'>
                            <Card className=' border-0' style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={profileCard} alt='' />
                                <Card.Body className='d-flex justify-content-center' >
                                    <Button className='text-white fw-bold ps-2 pe-2' variant="warning">Change Photo Profile</Button>
                                </Card.Body>
                            </Card>
                        </section>
                    </div>

                </Card>;

            </div>
        </>
    )
}
