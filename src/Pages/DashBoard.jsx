import React from 'react'
import { TicketsPlane, BedDouble, Banknote, Plane, LayoutDashboard } from 'lucide-react';
import TabsComponent from '../Components/Tabs';

const DashBoard = () => {
    return (
        <div className='px-5 relative bg-[#f7f7f7] w-screen min-h-screen py-4'>
            <div className='flex rounded-2xl items-center pl-5 gap-5 my-10 bg-white py-8'>
                <LayoutDashboard size={30} />
                <div className='text-2xl sm:text-3xl font-semibold'>
                    Dashboard
                </div>
            </div>

            <div className='bg-white p-5 rounded-2xl'>
                <div className='text-2xl sm:text-3xl font-semibold'>
                    Over All Bookings
                </div>

                <div className='flex justify-center flex-wrap lg:flex-nowrap gap-2 py-7'>

                    {/* ------------- Flights Data -------------  */}
                    <div className='flex flex-grow bg-slate-100 justify-center rounded-2xl'>
                        {
                            Flights.map((flight, index) => (
                                <div key={index} className={`py-5 px-4`}>
                                    <div className='flex px-2 justify-center items-center gap-3'>
                                        {flight.Icon}
                                        <span className='font-semibold '>
                                            {flight.Name}
                                        </span>
                                    </div>
                                    <div className='px-2 pt-1 text-lg text-center'>
                                        {flight.Amount}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* ------------- Hotels Data -------------  */}

                    <div className='flex flex-grow bg-slate-100 justify-center rounded-2xl'>
                        {
                            Hotels.map((hotels, index) => (
                                <div key={index} className={`py-5 px-4`}>
                                    <div className='flex px-2 items-center gap-3'>
                                        {hotels.Icon}
                                        <span className='font-semibold'>
                                            {hotels.Name}
                                        </span>
                                    </div>
                                    <div className='px-2 pt-1 text-lg text-center'>
                                        {hotels.Amount}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* ------------- Umrah Package Data -------------  */}

                    <div className='flex flex-grow bg-slate-100 justify-center rounded-2xl'>
                        {
                            Umrah.map((umrah, index) => (
                                <div key={index} className={`py-5 bg-slate-100 px-4`}>
                                    <div className='flex px-2 justify-center items-center gap-3'>
                                        {umrah.Icon}
                                        <span className='font-semibold'>
                                            {umrah.Name}
                                        </span>
                                    </div>
                                    <div className='px-2 pt-1 text-lg text-center'>
                                        {umrah.Amount}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className=''>
                <TabsComponent/>
            </div>
        </div>
    )
}

export default DashBoard


const Flights = [
    {
        id: "0",
        Name: "Flights Booking",
        Icon: <Plane color='#2cab82' size={30}/>,
        Amount: '0'
    },
]

const Hotels = [
    {
        id: "0",
        Name: "Hotel Bookings",
        Icon: <BedDouble color='#2cab82' size={30}/>,
        Amount: '0'
    }
]

const Umrah = [
    {
        id: "0",
        Name: "Umrah Bookings",
        Icon: <TicketsPlane color='#2cab82' size={30}/>,
        Amount: '0'
    },
]