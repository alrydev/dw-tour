import React, { useState } from 'react'
import { Table, Button, Modal, Card, Row, Col, Stack } from 'react-bootstrap'

import iconBooking from '../../assets/images/iconBooking.png'
import searchIcon from '../../assets/images/searchIcon.png'
import { BsFileImage } from 'react-icons/bs';


export default function CardTransaction() {

    const [modalConfirm, setConfirm] = useState(false);

    const closeConfirm = () => setConfirm(false);
    const showConfirm = () => setConfirm(true);

    const dataTrans = JSON.parse(localStorage.getItem("DATA_TRANSACTION"))

    return (
        <>
            <div className='d-flex justify-content-center mt-5 pt-3 mb-3'>
                <h5 className='w-75 fw-bold mt-5'>Income Transaction</h5>
            </div>
            <div className='d-flex justify-content-center mb-5 pb-5'>

                <Table className='w-75' striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Trip</th>
                            <th>Payment Proof</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTrans.map((items) => (
                            <tr>
                                <td>1</td>
                                <td>{items.name}</td>
                                <td>{items.titleTrip}</td>
                                <td> - </td>
                                <td>{items.statusBooking}</td>
                                <td className='text-center pt-2 pb-3' >
                                    <img className='pointer' onClick={showConfirm} src={searchIcon} alt='' />
                                </td>
                            </tr>

                        ))}
                        {/* <Button variant="primary" >
                            Launch demo modal
                        </Button> */}

                        <Modal size="lg" show={modalConfirm} onHide={closeConfirm}>


                            <Modal.Body>
                                <div className='d-flex justify-content-center    '>
                                    <Card body className='w-customm w-100 pt-5 mb-5 mt-5 d-flex justify-content-center'>
                                        {/* section head */}
                                        <section className='d-flex justify-content-between pb-4'>
                                            <img src={iconBooking} alt=''></img>
                                            <div className=''>
                                                <span className='fw-bold fs-5 p-3 d-block' >Booking</span>
                                                <span className='d-block'>
                                                    {/* <span className='fw-bold'>-</span>, 22 July 2020 */}
                                                </span>
                                            </div>
                                        </section>

                                        {/* section info booking */}
                                        <section className=''>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="">
                                                    <Stack className='ms-3 me-3' gap={2}>
                                                        <div className="">
                                                            <p className='fw-bold' >6D/4N Fun Tassie Vacation</p>
                                                            {/* <p className='fw-light' >{Booking[0].country}</p> */}
                                                        </div>
                                                        <div className="d-flex justify-content-start">
                                                            <Button className='text-orange mt-4 mb-4' variant="warning" size="sm" disabled>
                                                                Waiting Approved
                                                            </Button>
                                                        </div>
                                                    </Stack>
                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <Row className=" d-flex justify-content-between w-75">
                                                        <Col sm={5}>
                                                            <p className="fw-bold" >Date Trip</p>
                                                            <p>26 Agustus 2020</p>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <p className="fw-bold">Duration</p>
                                                            <p>6 Day 4 Night</p>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <p className="fw-bold">Accomodation</p>
                                                            <p>Hotel 4 Nights</p>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <p className="fw-bold">Transporation</p>
                                                            <p>Qatar Airways</p>
                                                        </Col>
                                                    </Row>
                                                </div>

                                                <div className="fs-5 d-flex justify-content-center">
                                                    <div className="input-group mb-3 text-center">
                                                        <label for="upload-photo">
                                                            <BsFileImage />
                                                            <p className='fw-light' >upload payment proof</p>
                                                        </label>
                                                        <input hidden type="file" name="photo" id="upload-photo" />
                                                    </div>
                                                </div>
                                            </Stack>
                                        </section>

                                        {/* section total & profile */}
                                        <section className='mt-4'>
                                            <Table >
                                                <tbody className='widthbooking'>
                                                    <tr>
                                                        <td className="fw-bold" >No</td>
                                                        <td className="fw-bold">Fullname</td>
                                                        <td className="fw-bold">Gender</td>
                                                        <td className="fw-bold">Phone</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Alri</td>
                                                        <td>Male</td>
                                                        <td>081234</td>
                                                        <td className='fw-bold'  >Qty : </td>
                                                        <td className='fw-bold text-center' >1</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td className='fw-bold'>Total : </td>
                                                        <td className='fw-bold text-danger text-center'>IDR. 12.398.000 </td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </section>
                                    </Card>;
                                </div>

                            </Modal.Body>



                        </Modal>

                        {/* <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal> */}

                    </tbody>
                </Table>
            </div>

        </>
    )
}
