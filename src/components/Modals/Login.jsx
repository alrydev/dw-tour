import React, { useState } from 'react'
// import { useState } from 'react';

import { Modal, Form, Button } from 'react-bootstrap';

export default function Login({ modalLogin, setModalLogin, switchRegister }) {


    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
    }

    return (
        <>
            <Modal
                size="sm"
                show={modalLogin}
                onHide={() => setModalLogin(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className='d-flex justify-content-center'>
                    <h4 className='fw-bold' >Login</h4>
                </Modal.Header>
                <Form className='p-2' onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold" >Email</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='email' onChange={handleChange} type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='password' onChange={handleChange} type="password" />
                    </Form.Group>

                    <Button className='w-100 bg-warning text-white fw-bolder mt-3' variant="warning" type="submit">
                        Login
                    </Button>
                    <Form.Label className='d-flex justify-content-center pt-3 pb-2'>
                        <span>don't have an account? click <span onClick={() => { setModalLogin(false); switchRegister(true) }} className='fw-bolder pointer'>here</span></span>
                    </Form.Label>
                </Form>
            </Modal>
        </>
    )
}
