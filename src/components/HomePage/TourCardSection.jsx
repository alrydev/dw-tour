import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import CardTour from '../../DataDummy/CardTour'

export default function TourCardSection() {

    const navigate = useNavigate()

    return (
        <>
            <section className='tour-card-section'>
                <h2 className='text-center p-5'>GROUP TOUR</h2>
                <div>
                    <div className="row">
                        {CardTour.map((items) => (
                            <div className="col-sm-4 d-flex justify-content-center mb-5">
                                <Card className='border-0' style={{ width: '18rem' }}
                                    onClick={() => { navigate(`/detail/${items.index}`) }}
                                >
                                    <Card.Img className='pointer' variant="top" src={items.image} alt='' />
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
