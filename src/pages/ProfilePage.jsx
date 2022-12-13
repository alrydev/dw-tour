import React from 'react'

import CardProfile from '../components/CardProfile'
import NavUser from '../components/navbar/NavUser'
import CardBooking from '../components/CardBooking'
import Footer from '../components/HomePage/Footer'


export default function ProfilePage() {
    return (
        <>
            <NavUser />
            <CardProfile />
            <CardBooking />
            <Footer />
        </>
    )
}
