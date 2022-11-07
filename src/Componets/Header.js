import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseFill} from 'react-icons/ri'
import logo from '../assests/justicely-logo.png';
import logoWhite from '../assests/justicely-logo-white.png'
const Header = () => {
    const [expandNav, setExpandNav] = useState(false)
    return (
        <div className='py-2 bg-just lg:bg-transparent'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between'>
                <img src={logo} alt='Justicely Logo' className='h-10 hidden lg:block'/>
                <img src={logoWhite} alt='Justicely Logo' className='h-10 lg:hidden'/>
                <div className='flex gap-5 items-center'>
                    <ul className={`lg:flex gap-3 text-lg font-semibold absolute lg:static duration-500 ease-in-out bg-just lg:bg-transparent py-2 lg:py-0 px-10 lg:px-0 rounded-b-lg ${expandNav ? 'top-10 right-0': 'top-[-200px] right-0'}`}>
                        <li className='text-white lg:text-black lg:hover:text-just'><Link to='/'>Home</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-just'><Link to='/services'>Services</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-just'><Link to='/services'>About Us</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-just'><Link to='/blogs'>Blogs</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-just'><Link to='/login'>Login</Link></li>
                    </ul>
                    <div onClick={()=> setExpandNav(!expandNav)} className='lg:hidden'>
                        {
                            expandNav ? <RiCloseFill className='h-8 w-8 text-white cursor-pointer'></RiCloseFill>: <RiMenu3Line className='h-6 w-6 text-white cursor-pointer'></RiMenu3Line>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;