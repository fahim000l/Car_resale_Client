import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignIn = () => {

    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const { signIn, passwordReset } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'


    const handleSignIn = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    };

    const resetPassword = () => {

        if (!userEmail) {
            setError('Please provide your email');
            return;
        };
        passwordReset(userEmail)
            .then((result) => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
                setError(err);
            })
    }

    return (
        <section className="p-6 bg-gray-800 text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">

                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">Log Into your Account</span>
                    <h1 className="text-5xl font-extrabold text-gray-50">Sign In</h1>
                    <form onSubmit={handleSignIn} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid mt-5">
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Your Email</label>
                            <input onBlur={(event) => setUserEmail(event.target.value)} required name='email' type="email" placeholder="Your Email" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2 mt-2" />
                        </div>
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Password</label>
                            <input required name='password' type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2 mt-2" />
                            <p className='text-violet-400 text-start'>Forgot password? <span onClick={resetPassword} className='btn btn-link'>Reset</span></p>
                        </div>
                        <p className='text-xl my-2 text-red-600 text-start'>{error}</p>
                        <button type="submit" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Sign In</button>
                    </form>
                    <p className='text-violet-400'>Does not have and account? <button onClick={() => navigate('/signup')} className='btn btn-link'>Sign Up</button> </p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;