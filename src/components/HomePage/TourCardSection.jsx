import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function TourCardSection() {


    //get data trip local storage
    const DataTrip = JSON.parse(localStorage.getItem("DATA_TRIP"))
    // const Trip = [...DataTrip]

    const navigate = useNavigate()

    const formatRupiah = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })

    return (
        <>
            <section className='tour-card-section'>
                <h2 className='text-center p-5'>GROUP TOUR</h2>
                <div>
                    <div className="row">
                        {DataTrip.map((items) => (
                            <div className="col-sm-4 d-flex justify-content-center mb-5">
                                <Card className='border-0 pointer' style={{ width: '18rem' }}
                                    onClick={() => { navigate(`/detail/${items.idTrip}`) }}
                                >
                                    <Card.Img className='pointer' variant="top" src={items.image} alt='' />
                                    <Card.Body>
                                        <Card.Title>
                                            {items.title}
                                        </Card.Title>
                                        <div className='d-flex justify-content-between'>
                                            <span className='fw-bold text-warning' >
                                                {formatRupiah.format(items.price)}
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
