import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default function CardIncomeTrip() {

    const navigate = useNavigate()

    return (
        <>
            <div className='mt-5 pt-5 d-flex justify-content-center'>
                <Button onClick={() => navigate("/add-trip")} className='text-white fw-bold' variant="warning">Add Trip</Button>
            </div>
        </>
    )
}
