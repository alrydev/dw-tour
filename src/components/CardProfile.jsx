import React, { useState } from 'react'
import { Card, Stack, Button, Modal, Form } from 'react-bootstrap'

import { CgProfile } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function CardProfile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dataLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

    // let dataLoginn = [...dataLogin]

    // let [newImage, setNewImage] = useState(dataLoginn[0].image)



    return (
        <>
            <div className='pt-3 pb-2 d-flex justify-content-center mt-5'>
                <Card body className='w-50 mt-5'>
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
                                                {dataLogin[0].name}
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
                                                {dataLogin[0].address}
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
                                                {dataLogin[0].email}
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
                                                {dataLogin[0].phone}
                                            </div>
                                            <span className='fw-light text-grey' >phone</span>
                                        </div>
                                    </Stack>
                                </div>
                            </Stack>
                        </section>

                        <section className='pe-5 me-2'>
                            <Card className=' border-0' style={{ width: '14rem' }}>
                                <Card.Img variant="top" src={dataLogin[0].image} alt='' />
                                <Card.Body className='d-flex justify-content-center' >
                                    <Button onClick={handleShow} className='text-white fw-bold ps-2 pe-2' variant="warning">Change Photo Profile</Button>
                                </Card.Body>
                            </Card>
                        </section>
                    </div>

                </Card>;

            </div>

            <Modal size="md" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="formImage" type="text" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <div className='d-flex justify-content-center'>
                    <Button className="w-75 mt-0 mb-5 text-center fw-bold text-white " variant="warning" onClick={handleClose}>
                        Save Changes
                    </Button>
                </div>

            </Modal>
        </>
    )
}
