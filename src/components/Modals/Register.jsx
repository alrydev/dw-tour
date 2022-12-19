import React, { useState } from 'react'

import { Modal, Form, Button } from 'react-bootstrap';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal2 = withReactContent(Swal)

export default function Register({ modalRegister, setModalRegister, switchLogin }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
        image: "",
        role: "user",

    })

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        let data = []

        const arrData = localStorage.getItem("DATA_USER")
        if (arrData !== null) {
            data = JSON.parse(arrData)
        }

        data.push(form)
        localStorage.setItem("DATA_USER", JSON.stringify(data))

        setModalRegister(false)
        switchLogin(true)


        Swal2.fire({
            position: 'center',
            icon: 'success',
            title: 'REGISTER SUCCESS',
            showConfirmButton: false,
            timer: 2000
        })
    }

    return (
        <>
            <Modal

                size="md"
                show={modalRegister}
                onHide={() => setModalRegister(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className='d-flex justify-content-center'>
                    <h4 className='fw-bold' >Register</h4>
                </Modal.Header>
                <Form className='m-3' onSubmit={handleOnSubmit} >

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Full Name</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='name' onChange={handleOnChange} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='email' onChange={handleOnChange} type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='password' onChange={handleOnChange} type="password" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Phone</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='phone' onChange={handleOnChange} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='address' onChange={handleOnChange} type="text-area" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Gender</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='gender' onChange={handleOnChange} type="text" placeholder='Male/Female' />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Image</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='image' onChange={handleOnChange} type="text" />
                    </Form.Group>

                    <Button className='w-100 bg-warning text-white fw-bolder mt-3' variant="warning" type="submit">
                        Register
                    </Button>
                    <Form.Label className='d-flex justify-content-center pt-3 pb-2'>
                        <span>already have an account? click <span className='fw-bolder pointer' onClick={() => { setModalRegister(false); switchLogin(true) }} >here</span></span>
                    </Form.Label>
                </Form>
            </Modal>
        </>
    )
}
