import React from 'react'
import signupPlayer from '../Assets/Images/signupPlayer.png'
import signupListner from '../Assets/Images/signupLister.png'
import {Link} from "react-router-dom";

function Signup() {

    return (
            <div className='flex items-center' style={{height: '88vh'}}>
                <div className='mx-auto lg:w-1/2 md:w-1/2 w-9/12 text-center my-auto' >
                    <h1 className='text-4xl font-bold pt-14 md:pt-0'>
                        Welcome to <br className='hidden md:inline-block' />
                        Kekere Website
                    </h1>
                    <p className='text-sm font-semibold py-4 md:mb-8'>
                        Select how you want to proceed with the platform. <br className='hidden md:inline-block' />
                        Choose between buy and list.
                    </p>
                    <div className='lg:flex lg:gap-16'>
                        <Link to='co-own' className='block register-card p-4 md:mb-10 mb-10 lg:mb-0'>
                            <div>
                                <img src={signupPlayer} alt='Sign Up Player' className='w-full lg:max-w-max md:max-w-[50%] md:mx-auto' />
                            </div>
                            <h1 className='text-xl font-semibold py-5'>
                                Sign up to Co-Own
                            </h1>
                            <p className='text-sm font-semibold text-start'>
                                Join our talent pool of over 10,000 students
                                learning and growing their skills, with over
                                5,000 tutors ready to guide you.
                            </p>
                        </Link>
                        <div className='register-card p-4 md:mb-10 mb-10 lg:mb-0 opacity-60'>
                            <div>
                                <img src={signupListner} alt='Sign Up Player' className='mx-auto lg:max-w-[65%] xl:max-w-max' />
                            </div>
                            <h1 className='text-xl font-semibold py-5'>
                                Sign up to List
                            </h1>
                            <p className='text-sm font-semibold text-start'>
                                Join our talent pool of over 10,000 students
                                learning and growing their skills, with over
                                5,000 tutors ready to guide you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Signup