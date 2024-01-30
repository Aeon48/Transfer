import React from 'react'
import sideimg2 from '../Images/side2.png'

function SignUpSeller() {
  return (
    <div>
      <div className='w-full h-screen bg-gray-200 flex justify-center items-center font-roboto'>
        <div className='w-3/4 h-2/2 bg-white flex rounded-2xl'>

        <div className='w-full flex items-center'>
            <img
            className='object-cover'
            src={sideimg2} alt="" />
          </div>

          <div className='m-14 w-full mx-24'>
           <h3 className='text-2xl font-medium text-cyan-600'>Be a seller at   <span className='text-red-500'>Nfilili</span></h3>
            <p className='text-xs mt-6'>Want to expand your Business? You are making a right choice</p>

            <div className='mt-6'>
              <p>Business Name</p>
              <input
                        type="text"
                        className="py-2 pl-6 h-10 w-full mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Your legal business name'
                    />

              <p className='mt-5'>Website <span className='text-gray-400 text-sm'>(Optional)</span></p>
              <input
                        type="text"
                        className="py-2 pl-6 h-10 w-full mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Link to your website'
                    />

                 <p className='mt-5'>PAN Number</p>
              <input
                        type="number"
                        className="py-2 pl-6 h-10 w-full mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Enter your registered PAN number'
                    />

              <p className='mt-5'>Location</p>
              <input
                        type="text"
                        className="py-2 pl-6 w-full h-10 mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='City'
                    />

                <p className='mt-5'>Designation</p>
              <input
                        type="text"
                        className="py-2 pl-6 w-full h-10 mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='Your role in company'
                    />

                <p className='mt-2 '>Services</p>
              <input
                        type="text"
                        className="py-2 pl-6 w-full h-10 mt-2 border bg-gray-100 text-xs border-gray-300 rounded-xl focus:outline-none"
                        placeholder='e.g. education '
                    />

              <button
              type="submit"
              className="bg-cyan-600 mt-8 w-full text-white text-sm rounded-lg duration-300 hover:bg-cyan-500 h-10">
              Create Account
            </button>


            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SignUpSeller