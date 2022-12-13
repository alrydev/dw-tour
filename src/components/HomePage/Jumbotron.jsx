import React from 'react'

import { Button, Form, Card, Stack } from 'react-bootstrap';

import HeaderCard from '../../DataDummy/HeaderCard';

export default function Jumbotron() {
    return (
        <>

            <section className='header-section pt-5 mt-0'>
                <div className='d-flex justify-content-center'>
                    <div className='header-greet text-white d-flex justify-content-center flex-column pt-5 mt-5'>
                        <p className='text-header-greet '>Explore</p>
                        <p className='text-header-greet2 fw-light '>your amazing city together</p>
                    </div>
                </div>

                <div className='text-center fw-light' >
                    <p className='text-white' >Find great places to holiday</p>
                    <Form className='d-flex justify-content-center' >
                        <Form.Control className='w-50 rounded-0 border-0' type="text" placeholder='' />
                        <Button variant="warning" type="submit" className='rounded-0 text-white fw-bold'>
                            Search
                        </Button>
                    </Form>
                </div>

            </section >

            <section className='header-section-bottom d-flex justify-content-center' >
                <Stack direction="horizontal" gap={4}>
                    {HeaderCard.map((items) => (

                        <div>
                            <Card className='border-white p-2' style={{ width: '12rem' }}>
                                <div className='d-flex justify-content-center'>
                                    <img className='card-header-img w-50' src={items.image} alt=''></img>
                                </div>
                                <Card.Body className='text-center'>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Text>
                                        {items.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    ))}
                </Stack>
            </section>


        </>
    )
}
