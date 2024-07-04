import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function ConfirmPayment() {
    return (

        <div className='bg-[#C8F73A] relative h-screen'>

            <div className='bg-[#000000] w-full rounded-t-[32px] bottom-0 absolute h-[95%]'>
                <div className='h-[25%] flex justify-center items-center'>
                    {/* <img src={logo} className='w-28 aspect-square rounded-2xl'/> */}
                    <h1 className='text-[54px] text-[#C8F73A] font-bold'>INDRA</h1>

                </div>
                <div className='p-5 m-5'>
                    <div>
                        <h1 className='text-white text-sm text-center font-semibold'>Top Up Submitted!</h1>
                    </div>
                    <div className='mt-16 text-center'>
                        <h1 className='text-[#6e6e6e] text-sm font-semibold'>Make PayPal payment to</h1>
                        <h1 className='text-[#C8F73A] text-sm font-semibold'>otheremail@paypal.com</h1>
                    </div>
                    <div className='mt-5 text-center'>
                        <h1 className='text-[#6e6e6e] text-sm font-semibold'>of amount</h1>
                        <h1 className='text-[#C8F73A] text-sm font-semibold'>USD 420.69</h1>
                    </div>
                </div>
                <div className='absolute  bottom-10 flex justify-center w-full p-5'>
                    {/* <h1 className='text-gray-100 font-semibold text-center mb-3'>Continue to top up using PayPal</h1> */}
                    <Link to='/successful'>
                        <button className='bg-[#C8F73A] h-12 w-[80vw] rounded-xl'>
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPayment