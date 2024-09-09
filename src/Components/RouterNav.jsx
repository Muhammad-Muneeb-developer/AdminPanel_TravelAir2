import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard'
import SideBar from './SideBar'
import Flights from '../Pages/Flights'
import PaymentManagement from '../Pages/PaymentManagement'
import AgentManagement from '../Pages/AgentManagement'

const RouterNav = () => {
    return (
        <div className='flex'>
            <SideBar />
            <Routes>
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path='/flights' element={<Flights />} />
                <Route path='/payment-management' element={<PaymentManagement />} />
                <Route path='/agent-management' element={<AgentManagement />} />
            </Routes>
        </div>
    )
}

export default RouterNav