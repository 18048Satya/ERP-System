import { AppstoreFilled,PayCircleFilled,ShopFilled, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SideMenu() {
 const location = useLocation()
 const [selectedkeys, setselectedkeys] = useState()
  useEffect(() => {
    const pathName = location.pathname
    setselectedkeys(pathName)
  }, [location.pathname])
  
  const navigate = useNavigate();
  return (
    <div className='sidemenu'>
      <Menu 
      className="sidemenuVertical"
      mode="vertical"
      onClick={(item)=>{
        navigate(item.key);
      }}
      selectedKeys = {[selectedkeys]}
       items={[
        {
        label:"Dasboard",
        key:"/",
        icon:<AppstoreFilled/>
        },
        {
        label:"Products",
        key:"/products",
        icon:<ShopFilled/>
        },
        {
          label:"Orders",
          key:"/orders",
          icon:<ShoppingCartOutlined/>
        },
        {
          label:"Customers",
          key:"/customers",
          icon:<UserOutlined/>
        },
        {
          label:"Pricing",
          key:"/pricing",
          icon:<PayCircleFilled/>
        }
      ]}
      style={{fontSize:"15px", fontWeight:600, marginBottom:10}}>
         
      </Menu>
    </div>
  )
}

export default SideMenu