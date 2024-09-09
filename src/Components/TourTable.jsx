import React from 'react'

const TourTable = () => {

    return (
        <div className='overflow-x-scroll scrollbar-track-white scrollbar-thumb-gray-300 scrollbar-thin'>
            <table className='min-w-full'>
                <thead>
                    <tr className='border text-md whitespace-nowrap border-gray-300 text-gray-600 bg-gray-50'>
                        <th className='px-5 py-3 font-normal'>
                            Booking ID
                        </th>
                        <th className='px-5 font-normal'>
                            Title
                        </th>
                        <th className='px-5 font-normal'>
                            Status
                        </th>
                        <th className='px-5 font-normal'>
                            Status Remarks
                        </th>
                        <th className='px-5 font-normal'>
                            Umrah Type
                        </th>
                        <th className='px-5 font-normal'>
                            Start Time
                        </th>
                        <th className='px-5 font-normal'>
                            End Date
                        </th>
                        <th className='px-5 font-normal'>
                            Passengers
                        </th>
                        <th className='px-5 font-normal'>
                            Guests
                        </th>
                        <th className='px-5 font-normal'>
                            Price
                        </th>
                        <th className='px-5 font-normal'>
                            Agent 
                        </th>
                        <th className='px-5 font-normal'>
                            Voucher
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

export default TourTable