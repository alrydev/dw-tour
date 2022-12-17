import React, { useState } from 'react'
// import { MdOutlineAttachFile } from 'react-icons/md';

import { Form, Button, FloatingLabel } from 'react-bootstrap'
import CountryDropdown from 'country-dropdown-with-flags-for-react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal2 = withReactContent(Swal)

export default function CardAddTrip() {

    const [formTrip, setFormTrip] = useState({
        idTrip: "",
        title: "",
        country: "",
        accomodation: "",
        transport: "",
        meal: "",
        day: "",
        night: "",
        date: "",
        price: "",
        quota: "",
        desc: "",
        image: "",
    })



    const handleChange = (e) => {
        setFormTrip({
            ...formTrip,
            [e.target.name]: e.target.value
        })
    }

    const trips = []
    const handleOnSubmit = (e) => {
        e.preventDefault()

        let dataTrip = []
        const arrData = localStorage.getItem("DATA_TRIP")
        const arrayData = JSON.parse(arrData)

        if (arrData !== null) {
            dataTrip = JSON.parse(arrData)
        }

        for (let i = 0; i < arrayData.length; i++) {
            trips.push(arrayData[i])
        }
        formTrip.idTrip = arrayData.length

        formTrip.price = parseInt(formTrip.price)

        dataTrip.push(formTrip)
        localStorage.setItem("DATA_TRIP", JSON.stringify(dataTrip))



        Swal2.fire({
            position: 'center',
            icon: 'success',
            title: 'TRIP SUCCESS ADDED',
            showConfirmButton: false,
            timer: 2000
        })
        // console.log(formTrip);
    }

    return (
        <>
            <div className='d-flex justify-content-center mb-4 mt-5 pt-5'>
                <h3 className="fw-bold w-50 mt-5 pt-5">Add Trip</h3>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <Form className='w-50 mb-5' onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Title Trip</Form.Label>
                        <Form.Control name='title' onChange={handleChange} className='bg-lightgrey border-0' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='dp-block w-100 fw-bold' >Country</Form.Label>
                        <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS bg-lightgrey border-0  w-100 rounded ' preferredCountries={['us']} value="" name='country' handleChange={(e) => setFormTrip({ ...formTrip, country: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Accomodation</Form.Label>
                        <Form.Control name='accomodation' onChange={handleChange} className='bg-lightgrey border-0' type="text" />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Transportation</Form.Label>
                        <Form.Control name='transport' onChange={handleChange} className='bg-lightgrey border-0' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Eat</Form.Label>
                        <Form.Control name='meal' onChange={handleChange} className='bg-lightgrey border-0' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Duration</Form.Label>
                        <section className='d-flex '>
                            <div className=' d-flex w-25 me-5 align-items-center' >
                                <Form.Control name='day' onChange={handleChange} className='w-75 bg-lightgrey border-0' type="number" />
                                <Form.Label className='ms-2 fw-bold' >Day</Form.Label>
                            </div>
                            <div className=' d-flex w-25 me-5 align-items-center'>
                                <Form.Control name='night' onChange={handleChange} className='w-75 bg-lightgrey border-0' type="number" />
                                <Form.Label className='ms-2 fw-bold'>Night</Form.Label>
                            </div>
                        </section>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Date Trip</Form.Label>
                        <Form.Control name='date' onChange={handleChange} className='bg-lightgrey border-0' type="date" />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Price</Form.Label>
                        <Form.Control name='price' onChange={handleChange} className='bg-lightgrey border-0' type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Quota</Form.Label>
                        <Form.Control name='quota' onChange={handleChange} className='bg-lightgrey border-0' type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Description</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" >
                            <Form.Control
                                name='desc'
                                onChange={handleChange}
                                className='bg-lightgrey border-0'
                                as="textarea"
                                style={{ height: '120px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='w-100 fw-bold' >Image</Form.Label>
                        <Form.Control className='bg-lightgrey border-0' type="text" name="image" onChange={handleChange} />

                        {/* <label className='pointer' for="upload-photo">
                            <p className=' bg-lightgrey w-100 p-2 rounded text-warning fw-bold' >
                                <span className='pe-5 fw-bold text-warning'>
                                    Attache Here
                                </span>
                                <MdOutlineAttachFile />
                            </p>
                        </label> */}
                        {/* <input onChange={handleChange} hidden type="file" name="image" id="upload-photo" /> */}
                    </Form.Group>

                    <div className='d-flex justify-content-center'>
                        <Button className='ps-5 pe-5 fw-bold text-light text-center' variant='warning' type="submit">
                            Add Trip
                        </Button>

                    </div>
                </Form>

            </div>
        </>
    )
}
