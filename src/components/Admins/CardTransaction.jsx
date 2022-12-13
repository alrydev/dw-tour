import React from 'react'
import { Table } from 'react-bootstrap'

import searchIcon from '../../assets/images/searchIcon.png'

export default function CardTransaction() {
    return (
        <>
            <div className='d-flex justify-content-center mt-5 pt-3 mb-3'>
                <h5 className='w-75 fw-bold'>Income Transaction</h5>
            </div>
            <div className='d-flex justify-content-center'>

                <Table className='w-75' striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Trip</th>
                            <th>Payment Proof</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Thornton</td>
                            <td className='text-center pt-2 pb-3' >
                                <img src={searchIcon} alt='' />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </>
    )
}
