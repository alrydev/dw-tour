import React, { useState } from 'react'


import { Modal, Form, Button } from 'react-bootstrap';


export default function Login({ modalLogin, setModalLogin, switchRegister, LoginFunction }) {

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
        role: "user"
    })
    // ======================================================================
    // let isLogin = JSON.parse(localStorage.getItem("DATA_USER"))

    // const user = []

    // const LoginFunction = (dataLogin) => {
    //     isLogin.forEach((element) => {
    //         if (
    //             dataLogin.email === element.email &&
    //             dataLogin.password === element.password
    //         ) {
    //             user.push(element)
    //             localStorage.setItem("DATA_LOGIN", JSON.stringify(user))
    //             setModalLogin(false)
    //             alert("log in success")
    //         }
    //         else {
    //             console.log(isLogin);
    //         }
    //     })
    // }
    //==============================================================================

    const handleOnSubmit = (e) => {



        e.preventDefault()
        LoginFunction(formLogin)

        setModalLogin(false)


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
                <Form className='p-2' onSubmit={handleOnSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold" >Email</Form.Label>
                        <Form.Control id='email' className="bg-lightgrey border-0" name='email' onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control id='password' className="bg-lightgrey border-0" name='password' onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} type="password" />
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
