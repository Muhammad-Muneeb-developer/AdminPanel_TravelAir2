import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, Plane, UserRoundPen, Menu, X } from 'lucide-react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div className={`relative transition-all duration-500 ${isOpen ? 'w-[24rem]' : 'w-0'} `}>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-10 text-xl"
      >
        {isOpen ? <div className='bg-slate-200 rounded-3xl px-5 py-2'><X /></div> : <div className=''><Menu /></div>}
      </button>

      <div className={`bg-white flex flex-col min-h-screen py-24 ${isOpen ? 'block' : 'hidden'}`}>

        {/* --------------- Dashboard --------------- */}

        <NavLink to="/dashboard">
          <div className='flex items-center mx-2 mb-4 gap-3 pl-6 py-4 rounded-lg hover:bg-sky-100 cursor-pointer'>
            <span className='flex gap-x-3 pr-10'>
              <LayoutDashboard />
              <p>Dashboard</p>
            </span>
          </div>
        </NavLink>

        {/* // ------------- Flights -------------  */}

        <NavLink to="/flights">
          <div className='flex items-center mx-2 mb-4 gap-3 pl-6 py-4 rounded-lg hover:bg-sky-100 cursor-pointer'>
            <span>
              <Plane />
            </span>
            <p>Flights</p>
          </div>
        </NavLink>

        {/* // ------------- Agent Management -------------  */}

        <NavLink to="/agent-management">
          <div className='flex items-center mb-4 mx-2 gap-3 pl-6 py-4 rounded-lg hover:bg-sky-100 cursor-pointer'>
            <span>
              <UserRoundPen />
            </span>
            <p>Agent Management</p>
          </div>
        </NavLink>

        {/* //  ------------- Payment Management -------------  */}

        <NavLink to="/payment-management">
          <div className='flex items-center mx-2 gap-3 pl-6 py-4 rounded-lg hover:bg-sky-100 cursor-pointer'>
            <span>
              <CreditCard />
            </span>
            <p>Payment Management</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
