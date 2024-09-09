import React from 'react'

const HotelTable = () => {
    return (
        <div className='overflow-x-scroll scrollbar-track-white scrollbar-thumb-gray-300 scrollbar-thin'>
            <table className=''>
                <thead>
                    <tr className='border border-gray-300 whitespace-nowrap text-gray-600 bg-gray-50'>
                        <th className='px-5 py-3 font-normal'>
                            Booking ID
                        </th>
                        <th className='px-5 font-normal'>
                            Booking Time
                        </th>
                        <th className='px-5 font-normal'>
                            Status
                        </th>
                        <th className='px-5 font-normal'>
                            Status Remarks
                        </th>
                        <th className='px-5 font-normal'>
                            Provider
                        </th>
                        <th className='px-5 font-normal'>
                            Guests
                        </th>
                        <th className='px-5 font-normal'>
                            Check In
                        </th>
                        <th className='px-5 font-normal'>
                            Check Out
                        </th>
                        <th className='px-5 font-normal'>
                            Agent
                        </th>
                        <th className='px-5 font-normal'>
                            Voucher
                        </th>
                        <th className='px-5 font-normal'>
                            HCN
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

export default HotelTable