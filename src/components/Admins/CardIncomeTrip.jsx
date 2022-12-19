import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import CardTour from '../../DataDummy/CardTour.jsx'


export default function CardIncomeTrip() {



    const navigate = useNavigate()



    return (
        <>
            <div className='mt-5 pt-5 mb-5 d-flex justify-content-center'>
                <Button onClick={() => navigate("/add-trip")} className='text-white fw-bold' variant="warning">Add Trip</Button>
            </div>

            <section className='tour-card-section'>
                <h2 className='text-center p-5'>INCOME TRIP (static dummy)</h2>
                <div>
                    <div className="row">
                        {CardTour.map((items) => (
                            <div className="col-sm-4 d-flex justify-content-center mb-5">
                                <Card className='border-0 pointer' style={{ width: '18rem' }}
                                >
                                    <Card.Img className='pointer' variant="top"
                                        src={items.image}
                                        alt='' />
                                    <Card.Body>
                                        <Card.Title>
                                            {items.title}
                                        </Card.Title>
                                        <div className='d-flex justify-content-between'>
                                            <span className='fw-bold text-warning' >
                                                {items.price}
                                            </span>
                                            <span className='fw-bold text-grey'>
                                                {items.country}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
