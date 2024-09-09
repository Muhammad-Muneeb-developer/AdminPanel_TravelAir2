import React from 'react'

const FlightsTable = () => {

    return (
        <div className='overflow-x-scroll scrollbar-track-white scrollbar-thumb-gray-300 scrollbar-thin'>
            <table className=''>
                <thead>
                    <tr className='border text-md whitespace-nowrap border-gray-300 text-gray-600 bg-gray-50'>
                        <th className='px-5 py-3 font-normal'>
                            Booking ID
                        </th>
                        <th className='px-5 font-normal'>
                            PNR
                        </th>
                        <th className='px-5 font-normal'>
                            Status
                        </th>
                        <th className='px-5 font-normal'>
                            Status Remarks
                        </th>
                        <th className='px-5 font-normal'>
                            Travelers
                        </th>
                        <th className='px-5 font-normal'>
                            Sector
                        </th>
                        <th className='px-5 font-normal'>
                            Booking Time
                        </th>
                        <th className='px-5 font-normal'>
                            Supplier
                        </th>
                        <th className='px-5 font-normal'>
                            Travel Date
                        </th>
                        <th className='px-5 font-normal'>
                            Agent
                        </th>
                        <th className='px-5 font-normal'>
                            Brand Ticket
                        </th>
                        <th className='px-5 font-normal'>
                            Airline Ticket
                        </th>
                    </tr>
                </thead>

                <tbody className='border'>
                    <tr className='text-center hover:bg-gray-100 cursor-default'>
                        <td className='px-8 py-7'>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default FlightsTable