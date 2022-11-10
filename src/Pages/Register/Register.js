import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    //Set page title
    useTitle('Register')
    const { userRegistration, updateUser, googleLogin, githubLogin } = useContext(AuthContext);
    //Functionality for rediction after login
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    //Handle user registration using email and password
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = form.profile.value;
        userRegistration(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('Registration Successful...');
                //Get the access token from the server
                fetch('https://laura-jane.vercel.app/getaccesstoken', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Access_Token', data.token);
                        navigate('/activity')
                    })
                    .catch(err => console.error(err))
                updateUser(fullName, profile)
                    .then(() => { })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
        form.reset()
    }
    //Handle Google Registration/login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('Google Login Successful...')
                //Get the access token from the server
                fetch('https://laura-jane.vercel.app/getaccesstoken', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Access_Token', data.token);
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    //Handle Github Registration/login
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('GitHub Login Successful...')
                //Get the access token from the server
                fetch('https://laura-jane.vercel.app/getaccesstoken', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('Access_Token', data.token);
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-jane text-white">
                <h1 className="text-2xl font-bold text-center">Create An Account</h1>
                <form onSubmit={handleRegistration} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="fullname" className="block">Full Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="profile" className="block">Profile Image</label>
                        <input type="text" name="profile" id="profile" placeholder="Enter URL of Your Image" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-gray-900 font-bold bg-jane2nd rounded-3xl">Register</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-white"></div>
                    <p className="px-3 text-sm">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-white"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={handleGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6">Already have an account?
                    <Link to='/login' className="ml-2 font-bold underline dark:text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;