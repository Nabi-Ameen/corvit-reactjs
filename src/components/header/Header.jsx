import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const { pathname } = useLocation();

    const menu = [
        {
            path: "/",
            menuItem: "Home",

        },
        {
            path: "/aboutus",
            menuItem: "about Us"
        },
        {
            path: "/contactus",
            menuItem: "Contact Us"
        }
    ]

    return (
        <div className='bg-black p-3 text-white space-x-4'>
            {/* {
                menu?.map((menuItem, index)=>{
                    return(
                        <Link className={`${menuItem?.path === pathname ? "text-blue-500" : ""}`} to={menuItem?.path}>{menuItem?.menuItem}</Link>
                    )
                })
            } */}
            {
                menu?.map((menuItem, index) => {
                    return (
                        <NavLink className={({isActive})=>  isActive ? "text-blue-600" : "" } to={menuItem?.path}>{menuItem?.menuItem}</NavLink>
                    )
                })
            }
        </div>
    )
}

export default Header
