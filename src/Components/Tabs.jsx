import React, { useState } from 'react';
import { Plane, PlaneTakeoff, Hotel } from 'lucide-react';
import FlightsTable from './FlightsTable';
import HotelTable from './HotelTable';
import TourTable from './TourTable';

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('flights');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='bg-white '>
            <div className="flex justify-evenly rounded-2xl p-5 text-lg font-semibold mt-5">
                <div
                    className={`tab ${activeTab === 'flights' ? ' text-gray-700 px-4 items-center justify-center pb-1 border-b-2 border-blue-300 flex gap-2' : 'text-gray-700 flex items-center gap-2 px-4 pb-1'}`}
                    onClick={() => handleTabClick('flights')}
                >
                    <Plane />
                    <button>
                        Flights
                    </button>
                </div>
                <div
                    className={`tab ${activeTab === 'hotels' ? 'text-gray-700 px-4 pb-1 border-b-2 border-blue-300 flex gap-2' : 'text-gray-700 flex items-center gap-2 px-4 pb-1'}`}
                    onClick={() => handleTabClick('hotels')}
                >
                    <Hotel />
                    <button>
                        Hotels
                    </button>
                </div>
                <div
                    className={`tab ${activeTab === 'tours' ? ' text-gray-700 px-4 pb-1 border-b-2 border-blue-300 flex gap-2' : 'text-gray-700 flex items-center gap-2 px-4 pb-1'}`}
                    onClick={() => handleTabClick('tours')}
                >
                    <PlaneTakeoff />
                    <button>
                        Tours
                    </button>
                </div>
            </div>

            <div className="py-5 rounded-b-2xl">
                {/* ---------------- Flights ---------------- */}
                {activeTab === 'flights' && (
                    <div className='px-2 sm:px-5'>
                        <div className=''>
                            <input type="search" name="" id="" className='p-4 focus:outline-none focus:ring-emerald-500 border border-gray-600 shadow-sm placeholder-gray-500 sm:text-lg focus:border-emerald-500 rounded-xl w-full' placeholder='Search' />
                        </div>
                        <div className='mx-auto py-10 max-w-[55rem]'>
                            <FlightsTable />
                        </div>
                    </div>
                )}
                {/* ---------------- Hotels ---------------- */}

                {activeTab === 'hotels' && (
                    <div className='px-2 sm:px-5'>
                        <div className=''>
                            <input type="search" name="" id="" className='p-4 focus:outline-none focus:ring-emerald-500 border border-gray-600 shadow-sm placeholder-gray-500 sm:text-lg focus:border-emerald-500 rounded-xl w-full' placeholder='Search' />
                        </div>
                        <div className='mx-auto py-10  max-w-[55rem]'>
                            <HotelTable />
                        </div>
                    </div>
                )}

                {/* ---------------- Tours ---------------- */}

                {activeTab === 'tours' && (

                    <div className='px-2 sm:px-5'>
                        <div className=''>
                            <input type="search" name="" id="" className='p-4 focus:outline-none focus:ring-emerald-500 border border-gray-600 shadow-sm placeholder-gray-500 sm:text-lg focus:border-emerald-500 rounded-xl w-full' placeholder='Search' />
                        </div>
                        <div className='mx-auto py-10 max-w-[55rem]'>
                            <TourTable />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabsComponent;
