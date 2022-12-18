import React from 'react'

import iconBooking from '../assets/images/iconBooking.png'
import barcode from '../assets/images/barcode.png'

import { Card, Stack, Button, Row, Col, Table } from 'react-bootstrap'

export default function CardHistoryTrip() {


    let dataLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))
    let dataHistory = JSON.parse(localStorage.getItem("DATA_TRANSACTION"))

    let filteredName = dataHistory.filter(function (e) {
        return e.name === dataLogin[0].name
    })

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <p className='fw-bold fs-5 w-75' >HISTORY TRIP</p>
            </div>
            {filteredName.map((items) => (
                <div className='d-flex justify-content-center  mt-0 mb-0'>

                    <Card body className='w-75 pt-5 mb-5 mt-5 d-flex justify-content-center'>
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
                                            <p className='fw-bold' >{items.titleTrip}</p>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Button className='text-white mt-4 mb-4 px-5' variant="success" size="sm" disabled>
                                                {items.statusBooking}
                                            </Button>
                                        </div>
                                    </Stack>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Row className=" d-flex justify-content-between w-75">
                                        <Col sm={5}>
                                            <p className="fw-bold" >Date Trip</p>
                                            <p>{items.dateTrip}</p>
                                        </Col>
                                        <Col sm={5}>
                                            <p className="fw-bold">Duration</p>
                                            <p>{items.day} Day {items.night} Night</p>
                                        </Col>
                                        <Col sm={5}>
                                            <p className="fw-bold">Accomodation</p>
                                            <p>{items.accomodation}</p>
                                        </Col>
                                        <Col sm={5}>
                                            <p className="fw-bold">Transporation</p>
                                            <p>{items.transport}</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="fs-5 d-flex justify-content-center">
                                    <div className="input-group mb-3 text-center">
                                        {/* <label for="upload-photo">
                                            <BsFileImage />
                                            <p className='fw-light' >upload payment proof</p>
                                        </label> */}
                                        <img src={barcode} alt=''></img>
                                        {/* <input hidden type="file" name="photo" id="upload-photo" /> */}
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
                                        <td>-</td>
                                        <td>{items.name}</td>
                                        <td>-</td>
                                        <td>{items.phone}</td>
                                        <td className='fw-bold'  >Qty : </td>
                                        <td className='fw-bold text-center' >{items.qty}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className='fw-bold'>Total : </td>
                                        <td className='fw-bold text-danger text-center'>{items.totalPayment} </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </section>
                    </Card>

                </div>
            ))}

        </>
    )
}
