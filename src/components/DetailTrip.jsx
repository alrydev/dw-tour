import React, { useState } from 'react'
import { Stack, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

import detailTrip1 from '../assets/images/detailTrip/detailTrip1.png'
import detailTrip2 from '../assets/images/detailTrip/detailTrip2.png'
import detailTrip3 from '../assets/images/detailTrip/detailTrip3.png'

import hotelIcon from '../assets/images/detailTrip/hotelIcon.png'
import mealIcon from '../assets/images/detailTrip/mealIcon.png'
import planeIcon from '../assets/images/detailTrip/planeIcon.png'
import timeIcon from '../assets/images/detailTrip/timeIcon.png'
import dateIcon from '../assets/images/detailTrip/dateIcon.png'


export default function DetailTrip() {

    const formatRupiah = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    })

    const Trips = JSON.parse(localStorage.getItem("DATA_TRIP"))

    const navigate = useNavigate()
    const { index } = useParams()

    // price of the trip
    let fixedPrice = Trips[index].price

    let [price, setCounter] = useState(Trips[index].price)

    function Add() {
        setCounter(price += fixedPrice)
    }

    function Less() {
        setCounter(price -= fixedPrice)
    }

    // ==================================

    let person = 1

    let [addPerson, setAddPerson] = useState(1)

    function AddCounter() {
        setAddPerson(addPerson += person)
    }
    function LessCounter() {
        setAddPerson(addPerson -= person)
    }


    function dualFuncPlus() {
        Add()
        AddCounter()
    }
    function dualFuncLess() {
        Less()
        LessCounter()
    }

    // =========================== BOOKING ============================

    const isLogin = JSON.parse(localStorage.getItem("DATA_LOGIN"))

    // get name and phone
    const name = isLogin[0].name
    const phone = isLogin[0].phone

    const totalPayment = formatRupiah.format(price)
    const titleTrip = Trips[index].title
    const country = Trips[index].country
    const dateTrip = Trips[index].date
    const day = Trips[index].day
    const night = Trips[index].night
    const accomodation = Trips[index].accomodation
    const transport = Trips[index].transport

    const statusBooking = "waiting approval"

    const qty = addPerson

    // const booking = []

    const dataBooking = { name, phone, dateTrip, totalPayment, titleTrip, qty, country, day, night, accomodation, transport, statusBooking }


    function pushBooking() {
        // booking.push(dataBooking)
        // console.log(booking);
        // localStorage.setItem("DATA_BOOKING", JSON.stringify(booking))

        // =================
        // let bookingData = []
        // const arrData = localStorage.getItem("DATA_BOOKING")
        // if (arrData !== null) {
        //     bookingData = JSON.parse(arrData)
        // }

        // bookingData.push(dataBooking)
        localStorage.setItem("DATA_BOOKING", JSON.stringify(dataBooking))
    }


    // let data = []
    // const arrData = localStorage.getItem("DATA_USER")

    // if (arrData !== null) {
    //     data = JSON.parse(arrData)
    // }

    // data.push(form)
    // localStorage.setItem("DATA_USER", JSON.stringify(data))


    function navigateToBooking() {
        navigate("/pay")
    }

    function someFunct() {
        pushBooking()
        navigateToBooking()
    }


    return (
        <>
            <section className='mt-5'>
                <div className='d-flex justify-content-center mt-5' >
                    <div className='mt-5 w-75'>
                        <h3 className='pt-5'>
                            {Trips[index].title}
                        </h3>
                        <p>
                            {Trips[index].country}
                        </p>
                    </div>
                </div>

                <Stack gap={2}>
                    <div className=" text-center">
                        <img src={Trips[index].image} alt=''></img>
                    </div>
                    <div className=" d-flex justify-content-center">
                        <Stack direction="horizontal" gap={3}>
                            <div className="">
                                <img src={detailTrip1} alt=''></img>
                            </div>
                            <div className="">
                                <img src={detailTrip2} alt=''></img>
                            </div>
                            <div className="">
                                <img src={detailTrip3} alt=''></img>
                            </div>
                        </Stack>
                    </div>
                </Stack>




            </section>

            <section >

                <div className='d-flex justify-content-center'>
                    <p className=' fs-5 fw-bold w-75 pt-2 '>
                        Information Trip
                    </p>
                </div>

                <div className="d-flex justify-content-center">
                    <Stack className=" w-75 d-flex justify-content-between" direction="horizontal" gap={5}>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Accomodation</p>
                            <img src={hotelIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>{Trips[index].accomodation} {Trips[index].night} Nights</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Transportation</p>
                            <img src={planeIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>{Trips[index].transport}</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Eat</p>
                            <img src={mealIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>{Trips[index].meal}</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Duration</p>
                            <img src={timeIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>{Trips[index].day} Day {Trips[index].night} Night</span>
                        </div>
                        <div className="">
                            <p className='text-grey2 fw-bold'>Date Trip</p>
                            <img src={dateIcon} alt=''></img>
                            <span className='ps-2 fw-bold'>{Trips[index].date}</span>
                        </div>
                    </Stack>
                </div>

                <div className='d-flex justify-content-center'>
                    <div className='w-75 mt-4'>
                        <p className='fw-bold text-grey'>
                            Description
                        </p>
                        <p className='text-grey2'>
                            {Trips[index].desc}
                        </p>
                    </div>
                </div>

            </section>

            <section  >
                <div className='d-flex justify-content-center' >
                    <Stack className=' d-flex justify-content-between w-75' direction="horizontal" gap={2}>
                        <div className="">
                            <span className='fw-bold text-warning' >{formatRupiah.format(Trips[index].price)}</span>
                            <span className='fw-bold'>/ Person</span>
                        </div>
                        <div className="">
                            <div className='mb-2'>
                                <Button onClick={dualFuncPlus} className='text-white fw-bold me-2' variant="warning">
                                    +
                                </Button>
                                <span>add quantity</span>
                            </div>
                            <p>{addPerson}</p>
                            <div>
                                <Button onClick={dualFuncLess} className='text-white fw-bold me-2' variant="warning">
                                    -
                                </Button>
                                <span>reduce quantity</span>
                            </div>
                            {/* <span className='ms-2 me-2 fw-bold'>
                                {price / price}
                            </span> */}
                        </div>
                    </Stack>
                </div>

                <div className='d-flex justify-content-center mt-2'>
                    <Stack className=' d-flex justify-content-between w-75' direction="horizontal" gap={2}>
                        <div className="fw-bold">
                            Total:
                        </div>
                        <div className="fw-bold text-warning">
                            {formatRupiah.format(price)}
                        </div>
                    </Stack>

                </div>
                <div className='d-flex justify-content-center mt-5' >
                    <p className='w-75 text-end'>
                        <Button
                            onClick={someFunct}
                            className='text-white fw-bold ps-4 pe-4' variant="warning">Book Now</Button>
                    </p>
                </div>

            </section>
        </>
    )
}
