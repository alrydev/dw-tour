import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import IconLogo from '../../assets/images/Iconlogo.png'

import { Container, Navbar, Button } from 'react-bootstrap';

// import { Login, Register } from '../Modals';
import Login from '../Modals/Login';
import Register from '../Modals/Register';

export default function NavUser() {

    const navigate = useNavigate()

    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)

    return (
        <>
            <Navbar className='fixed-top' >
                <Container>
                    <Navbar.Brand href="#home">
                        <img onClick={() => navigate("/")} src={IconLogo} alt='' ></img>
                    </Navbar.Brand>

                    <div>
                        <Button onClick={() => setModalLogin(true)} className='width-button-auth me-3' variant="outline-light">Login</Button>

                        <Button onClick={() => setModalRegister(true)} className='width-button-auth text-light' variant="warning">Register</Button>
                    </div>
                </Container>
            </Navbar>

            <Login modalLogin={modalLogin} setModalLogin={setModalLogin} switchRegister={setModalRegister} />
            <Register modalRegister={modalRegister} setModalRegister={setModalRegister} switchLogin={setModalLogin} />
        </>
    )
}
