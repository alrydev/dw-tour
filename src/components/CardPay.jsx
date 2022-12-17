import React, { useState } from 'react'
import { Card, Stack, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import { BsFileImage } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import Iconlogo from '../assets/images/Iconlogo.png'
import iconBooking from '../assets/images/iconBooking.png'

function CardPay() {

    const [modalConfirm, setConfirm] = useState(false);

    const closeConfirm = () => setConfirm(false);
    const showConfirm = () => setConfirm(true);


    // ================================= TRANSACTION ===========================================

    const Booking = JSON.parse(localStorage.getItem("DATA_BOOKING"))

    const name = Booking.name
    const phone = Booking.phone
    const dateTrip = Booking.dateTrip
    const totalPayment = Booking.totalPayment
    const titleTrip = Booking.titleTrip
    const qty = Booking.qty
    const country = Booking.country
    const day = Booking.day
    const night = Booking.night
    const accomodation = Booking.accomodation
    const transport = Booking.transport
    const statusBooking = "approved"
    const imagePaymentProof = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTE_mtIITAWBA34PYlYGAF69KIEbNbgujjw&usqp=CAU"




    const dataTrans = {
        name, phone, dateTrip, totalPayment, titleTrip, qty, country, day, night, accomodation, transport, statusBooking, imagePaymentProof
    }



    const handleClick = () => {

        let transaction = []
        const arrData = localStorage.getItem("DATA_TRANSACTION")
        if (arrData !== null) {
            transaction = JSON.parse(arrData)
        }

        transaction.push(dataTrans)
        localStorage.setItem("DATA_TRANSACTION", JSON.stringify(transaction))


        // ================================

        // transaction.push(dataTrans)
        // localStorage.setItem("DATA_TRANSACTION", JSON.stringify(transaction))
        console.log(transaction);
    }

    function someFunc() {
        showConfirm()
        handleClick()
    }

    // ================================================================
    // let data = []
    // const arrData = localStorage.getItem("DATA_USER")

    // if (arrData !== null) {
    //     data = JSON.parse(arrData)
    // }

    // data.push(form)
    // localStorage.setItem("DATA_USER", JSON.stringify(data))
    // ======================================================================

    const navigate = useNavigate()

    return (
        <>
            <div className='d-flex justify-content-center pt-5 mt-5 mb-5'>
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
                                        <p className='fw-bold' >{Booking.titleTrip}</p>
                                        {/* <p className='fw-light' >{Booking[0].country}</p> */}
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <Button className='text-light mt-4 mb-4' variant="danger" size="sm" disabled>
                                            Waiting Payment
                                        </Button>
                                    </div>
                                </Stack>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Row className=" d-flex justify-content-between w-75">
                                    <Col sm={5}>
                                        <p className="fw-bold" >Date Trip</p>
                                        <p>{Booking.dateTrip}</p>
                                    </Col>
                                    <Col sm={5}>
                                        <p className="fw-bold">Duration</p>
                                        <p>{Booking.day} Day {Booking.night} Night</p>
                                    </Col>
                                    <Col sm={5}>
                                        <p className="fw-bold">Accomodation</p>
                                        <p>{Booking.accomodation}</p>
                                    </Col>
                                    <Col sm={5}>
                                        <p className="fw-bold">Transporation</p>
                                        <p>{Booking.transport}</p>
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
                                    <td>{Booking.name}</td>
                                    <td> - </td>
                                    <td>{Booking.phone}</td>
                                    <td className='fw-bold'  >Qty : </td>
                                    <td className='fw-bold text-center' >{Booking.qty}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className='fw-bold'>Total : </td>
                                    <td className='fw-bold text-danger text-center'>{Booking.totalPayment}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </section>
                </Card>
            </div>
            <div className='w-80 d-flex justify-content-end mt-min mb-5'>
                <Button variant="warning" className="px-5 text-light fw-bold" onClick={someFunc} >PAY</Button>
            </div>


            <Modal show={modalConfirm} centered onHide={closeConfirm}>

                <Modal.Body className='' >
                    <p className='d-flex justify-content-center'>Your payment will be confirmed witin 1 x 24 hours</p>
                    <p className='d-flex justify-content-center'>To see orders click<span onClick={() => navigate("/booking")} className='fw-bold pointer'>&nbsp; Here &nbsp;</span> thank you</p>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default CardPay