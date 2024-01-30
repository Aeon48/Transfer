import React, {useState} from 'react'
import logo from '../Images/logo.png'
import sideicon from '../Images/3dicons.png'
import google from '../Images/google.svg'
import facebook from '../Images/facebook.svg'
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import sideimg from '../Images/back.png'

function Login() {
  return (
   <div>
      <div className='w-full h-screen bg-gray-200 flex justify-center items-center font-roboto'>
        <div className='w-3/5 h-2/2 bg-white flex'>
          <div className='w-1/2'>
            <img
            className='object-cover'
            src={sideimg} alt="" />
          </div>

          <div className='m-14 mx-24'>
            <h3 className='text-2xl font-medium text-cyan-600'>Log in to your <span className='text-red-500'>Nfilili</span> Account</h3>
            <p className='text-xs mt-6'>Welcome back ! Select method to log in</p>

            <div className='flex gap-5'>
              <div className='w-32 flex h-10 mt-4 border rounded-xl'>
              <img
              className='w-5 flex items-center mx-6'
                src={google} alt="" />

                <a href='https://www.google.com' className='text-sm -mx-2 mt-2 h-5 flex items-center justify-center font-medium'>Google</a>
              </div>

              <div className='w-40 flex h-10 mt-4 border rounded-xl'>
              <img
              className='w-7 flex items-center mx-6'
                src={facebook} alt="" />

                <a href='https://www.facebook.com' className='text-sm -mx-2 mt-2 h-5 flex items-center justify-center font-medium'>Facebook</a>
              </div>
            </div>

            <div>
            <div className='mt-3'>
                    <div className='inline-flex items-center justify-center'>
                    <hr className='w-80 border' />
                    <span className='absolute px-2 font-normal text-xs text-gray-500 -transalte-x-1/2 bg-white left-1/1 dark:text-gray-500 dark:bg-white'>or continue with email</span>
                    </div>
                </div>
            </div>

            <div>
            <div className="mt-6">
                    <input
                        type="email"
                        className="py-2 pl-10 w-80 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Email'
                    />
                    <div className="-my-6 pl-3 flex items-center">
                      <MdOutlineEmail />
                    </div>
             </div>

             <div className="mt-12">
                    <input
                        type="password"
                        className="py-2 pl-10 w-80 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Password'
                    />
                    <div className="-my-6 pl-3 flex items-center">
                      <CiLock />
              </div>
             </div>
            </div>

            <div className="flex items-center justify-between mt-14">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-xs text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#forgotPassword" className="text-xs text-blue-500 mx-6 hover:underline">
                Forgot Password?
              </a>
            </div>

            <div>
            <button
              type="submit"
              className="bg-cyan-600 mt-5 w-80 text-white text-sm rounded-lg duration-300 hover:bg-cyan-500 h-8">
              Login
            </button>
            </div>

            <div>
            <div className="flex justify-center mt-5 text-xs">
              <p className="mr-2">Don't have an account?</p>
              <a href="#createAccount" className="text-blue-500 hover:underline">
                Create account
              </a>
            </div>
            </div>

          </div>

        </div>
      </div>
   </div>
  ) 
}

export default Login