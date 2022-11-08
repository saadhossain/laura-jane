import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneSquareAlt, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assests/laura-jane-white.png';
import './footer.css';
const Footer = () => {
    return (
        <div className='p-10 footer flex flex-col'>
            <div className='w-full lg:w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-white'>
                {/* Footer Widget 1 */}
                <div>
                    <img src={logo} alt='Laura jane Logo' />
                    <p className='font-semibold my-5'>
                        I am Laura Jane a popular Lawyer practice in different law section.
                        In my 15 years of Career I have fight for 1802 Cases and Win 90 % of Them.
                        For Legal Support get in touch with me.
                    </p>
                    <div className='flex gap-2'>
                        <Link to=''><FaFacebookSquare className='w-5 h-5 lg:w-8 lg:h-8'></FaFacebookSquare></Link>
                        <Link to=''><FaTwitterSquare className='w-5 h-5 lg:w-8 lg:h-8'></FaTwitterSquare></Link>
                        <Link to=''><FaLinkedin className='w-5 h-5 lg:w-8 lg:h-8'></FaLinkedin></Link>
                    </div>
                </div>
                {/* Footer Widget 2 */}
                <div>
                    <h3 className='text-xl lg:text-3xl font-bold'>Practice Area</h3>
                    <ul className='mt-8 font-semibold flex flex-col gap-3'>
                        <li><Link>Crimial Law</Link></li>
                        <li><Link>Cyber Crime Law</Link></li>
                        <li><Link>Sexual Victim Support</Link></li>
                        <li><Link>Property/Land Law</Link></li>
                        <li><Link>TAX/VAT Law</Link></li>
                        <li><Link>Power/Energy Law</Link></li>
                    </ul>
                </div>
                {/* Footer Widget 3 */}
                <div>
                    <h3 className='text-xl lg:text-3xl font-bold'>Contact Me</h3>
                    <ul className='mt-8 font-semibold flex flex-col gap-3'>
                        <li>
                            <Link className='flex items-center gap-2'>
                                <FaPhoneSquareAlt className='w-5 h-5 lg:w-8 lg:h-8'></FaPhoneSquareAlt>
                                914-635-5806 (Chamber)<br />
                                914-632-5807 (Personal)
                            </Link>
                        </li>
                        <li>
                            <Link className='flex items-center gap-2'>
                                <FaEnvelope className='w-5 h-5 lg:w-8 lg:h-8'></FaEnvelope>
                                consult@laurajane.com<br />
                                care@laurajane.com
                            </Link>
                        </li>
                        <li>
                            <Link className='flex items-center gap-2'>
                                <FaMapMarkerAlt className='w-5 h-5 lg:w-8 lg:h-8'></FaMapMarkerAlt>
                                188 Darian Street<br />
                                North Josiahhaven<br />
                                51121, Washington
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Footer Widget 4 */}
                <div>
                    <h3 className='text-xl lg:text-3xl font-bold'>Important</h3>
                    <ul className='mt-8 font-semibold flex flex-col gap-3'>
                        <li><Link>Your Privacy</Link></li>
                        <li><Link>Terms of Service</Link></li>
                        <li><Link>Instant Help</Link></li>
                        <li><Link>FAQ's</Link></li>
                        <li><Link>Free Counselling</Link></li>
                    </ul>
                </div>
            </div>
            <div className='border-t-2 border-white w-full lg:w-10/12 mx-auto text-white font-semibold'>
                <p className='pt-2'>&copy; 2022 All Rights Reserved by Laura Jane</p>
            </div>
        </div>
    );
};

export default Footer;