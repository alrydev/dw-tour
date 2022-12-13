import React, { useState } from 'react'
// import { useState } from 'react';

// import { UserContext } from '../../context/userContext';
import { Modal, Form, Button } from 'react-bootstrap';

export default function Register({ modalRegister, setModalRegister, switchLogin }) {

    // const [state, dispatch] = useContext(UserContext)

    const dataUser = []
    const cek = localStorage.getItem("data_user")

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

        dataUser.push(cek)

        localStorage.setItem("data_user", JSON.stringify(dataUser))

        console.log(dataUser);
    }

    return (
        <>
            <Modal
                size="sm"
                show={modalRegister}
                onHide={() => setModalRegister(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header className='d-flex justify-content-center'>
                    <h4 className='fw-bold' >Register</h4>
                </Modal.Header>
                {/* <p className='d-flex justify-content-center align-items-center p-3 fs-10'>
                    Register
                </p> */}
                <Form className='m-3' onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 " controlId="">
                        <Form.Label className="fw-bold">Full Name</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='name' onChange={handleChange} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='email' onChange={handleChange} type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control className="bg-lightgrey border-0" name='password' onChange={handleChange} type="password" />
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
