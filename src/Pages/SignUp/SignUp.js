import React from 'react';

const SignUp = () => {

    const imageBBSecret = process.env.REACT_APP_image_bb_secret;


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imageBBSecret}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData.data.url);

                const userInfo = {
                    name,
                    email,
                    role,
                    password,
                    image: imageData.data.url
                };
            });
    }

    return (
        <section className="p-6 bg-gray-800 text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
                    <span className="block mb-2 text-violet-400">Create Account</span>
                    <h1 className="text-5xl font-extrabold text-gray-50">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid mt-5">
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Your name</label>
                            <input name='name' type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2 mt-2" />
                        </div>
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Your Email</label>
                            <input name='email' type="email" placeholder="Your Email" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2 mt-2" />
                        </div>
                        <div className='text-start'>
                            <label className='font-bold text-xl mb-2'>Your Role</label>
                            <select name='role' className="select select-bordered w-full">
                                <option defaultValue>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Password</label>
                            <input name='password' type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2 mt-2" />
                        </div>
                        <div className='text-start'>
                            <label className='font-bold text-xl'>Upload Your Profile Pic</label>
                            <input name='image' type="file" className="file-input w-full mt-2" />
                        </div>
                        <button type="submit" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Sign Up</button>
                    </form>
                </div>
                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
            </div>
        </section>
    );
};

export default SignUp;