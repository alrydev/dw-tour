import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'

import searchIcon from '../../assets/images/searchIcon.png'


export default function CardTransaction() {

    const [modalConfirm, setConfirm] = useState(false);

    const closeConfirm = () => setConfirm(false);
    const showConfirm = () => setConfirm(true);

    const dataBooking = JSON.parse(localStorage.getItem("DATA_BOOKING"))

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
                        {dataBooking.map((items) => (
                            <tr>
                                <td>1</td>
                                <td>{items.name}</td>
                                <td>{items.country}</td>
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

                        <Modal show={modalConfirm} centered onHide={closeConfirm}>

                            <Modal.Body className='' >
                                <p className='d-flex justify-content-center'>Your payment will be confirmed witin 1 x 24 hours</p>
                                <p className='d-flex justify-content-center'>To see orders click<span className='fw-bold pointer'>&nbsp; Here &nbsp;</span> thank you</p>
                            </Modal.Body>

                        </Modal>

                    </tbody>
                </Table>
            </div>

        </>
    )
}
