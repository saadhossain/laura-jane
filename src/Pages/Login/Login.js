import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    //Set page title
    useTitle('Login')
    const { userLogin, googleLogin, githubLogin, resetPassword } = useContext(AuthContext);
    //Functionality for rediction after login
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/activity'
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('Login Successful...')
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
    //Send User a Password Reset Email
    const handlePasswordReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        resetPassword(email)
            .then(() => {
                toast.success('Password Link Sent to your Email...')
                e.target.reset()
            })
            .catch(err=> console.error(err))
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-jane text-white">
                <h1 className="text-2xl font-bold text-center">Sign In Your Account</h1>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block">Email Address</label>
                        <input type="text" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md text-gray-900" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-gray-900" />
                        <div className="flex justify-end text-xs">
                            <label htmlFor="passReset" className='cursor-pointer'>Forgot Password?</label>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-gray-900 font-bold bg-jane2nd rounded-3xl">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-white"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
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
                <p className="text-xs text-center sm:px-6">Don't have an account?
                    <Link to='/register' className="ml-2 font-bold underline dark:text-gray-100">Register</Link>
                </p>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="passReset" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <form onSubmit={handlePasswordReset}>
                        <label htmlFor="passReset" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold mb-2">Reset Password!</h3>
                        <input type="email" name="email" placeholder='Enter Your Email' className='border-2 border-jane p-2 w-full rounded-lg' />
                        <button className='jane-btn my-2' type='submit'>Send Password Reset Link</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;