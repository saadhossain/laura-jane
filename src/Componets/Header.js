import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseFill} from 'react-icons/ri'
import logo from '../assests/laura-jane.png'
import logoWhite from '../assests/laura-jane-white.png'
import { AuthContext } from '../Context/AuthProvider';
import {AiOutlineLogout} from 'react-icons/ai'
import toast from 'react-hot-toast';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [expandNav, setExpandNav] = useState(false);

    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.error('You are Logged Out...')
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='py-2 bg-jane lg:bg-transparent'>
            <div className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between'>
                <Link to='/'><img src={logo} alt='Justicely Logo' className='h-10 hidden lg:block'/></Link>
                <img src={logoWhite} alt='Justicely Logo' className='h-10 lg:hidden'/>
                <div className='flex gap-5 items-center'>
                    <ul className={`z-50 lg:flex items-center gap-3 text-lg font-semibold absolute lg:static duration-500 ease-in-out bg-jane lg:bg-transparent py-2 lg:py-0 px-10 lg:px-0 rounded-b-lg ${expandNav ? 'top-10 right-0': 'top-[-200px] right-0'}`}>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/'>Home</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/services'>Services</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/services'>About</Link></li>
                        <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/blogs'>Blogs</Link></li>
                        {/* Conditional Rendering on Header */}
                        {
                            user?.email
                            
                            ? <>
                            <li className='text-white lg:text-black lg:hover:text-jane'><Link to='/add-service'>Add Service</Link></li>
                            <img src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/mzkVLJt/profile.png'} alt={user?.displayName ? user.displayName : 'Your Profile'} className='w-8 rounded-full'/>
                            <AiOutlineLogout onClick={handleLogOut} className='w-6 h-6 text-jane2nd cursor-pointer'></AiOutlineLogout>
                            </>
                            
                            :<li className='text-white lg:text-black lg:hover:text-jane'><Link to='/login'>Login</Link></li>
                        }
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