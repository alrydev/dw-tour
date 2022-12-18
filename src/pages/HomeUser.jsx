import React, { useState } from 'react'

import NavUser from '../components/navbar/NavUser'
import Jumbotron from '../components/HomePage/Jumbotron'
import TourCardSelection from '../components/HomePage/TourCardSection'
import Footer from '../components/HomePage/Footer'

export default function HomeUser() {



    let [search, searchCountry] = useState()
    let dataTrip = JSON.parse(localStorage.getItem("DATA_TRIP"))

    let filteredTrips = dataTrip.filter(function (e) {
        return e.country === search.country
    })

    // ====================================================================================

    // let storeSearch = []
    // storeSearch.push(search)

    // localStorage.setItem("DATA_SEARCH", storeSearch)



    return (
        <>
            <NavUser />
            <Jumbotron dataTrip={dataTrip} search={search} searchCountry={searchCountry} filteredTrips={filteredTrips} />
            <TourCardSelection search={search} filteredTrips={filteredTrips} />
            <Footer />
        </>
    )
}
