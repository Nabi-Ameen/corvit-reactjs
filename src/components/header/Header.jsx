import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-black p-3 text-white '>
            <ul className='flex items-center space-x-4'>
                <li> <Link to={"/"}>Home</Link> </li>
                <li> <Link to={"/aboutus"}>about us</Link></li>
                <li><Link to={"/contactus"}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
