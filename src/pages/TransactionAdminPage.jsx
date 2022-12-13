import React from 'react'
import NavUser from '../components/navbar/NavUser'
import CardTransaction from '../components/Admins/CardTransaction'
import Footer from '../components/HomePage/Footer'

export default function TransactionAdminPage() {
    return (
        <>
            <NavUser />
            <CardTransaction />
            <Footer />
        </>
    )
}
