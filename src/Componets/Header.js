import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseFill} from 'react-icons/ri'
import logo from '../assests/laura-jane.png'
import logoWhite from '../assests/laura-jane-white.png'
const Header = () => {
    const [expandNav, setExpandNav] = useState(false)
    return (
        <div className='py-2 bg-jane lg:bg-transparent'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between'>
                <Link to='/'><img src={logo} alt='Justicely Logo' className='h-10 hidden lg:block'/></Link>
                <img src={logoWhite} alt='Justicely Logo' className='h-10 lg:hidden'/>
                <div className='flex gap-5 items-center'>
                    <ul className={`z-50 lg:flex gap-3 text-lg font-semibold absolute lg:static duration-500 ease-in-out bg-jane lg:bg-transparent py-2 lg:py-0 px-10 lg:px-0 rounded-b-lg ${expandNav ? 'top-10 right-0': 'top-[-200px] right-0'}`}>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/'>Home</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/services'>Services</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/services'>About Us</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/blogs'>Blogs</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/login'>Login</Link></li>
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