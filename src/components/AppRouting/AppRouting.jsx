import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Page/Dashboard'
import Products from '../Page/Products'
import Orders from '../Page/Orders'
import Customers from '../Page/Customers'
import Pricing from '../Page/Pricing'

function AppRouting() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/pricing" element={<Pricing/>}></Route>
        </Routes>
    </div>
      
    
  )
}

export default AppRouting