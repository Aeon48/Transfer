import React, {useState} from 'react'
import axios from 'axios';
import logo from '../Images/logo.png'
import sideicon from '../Images/3dicons.png'
import google from '../Images/google.svg'
import facebook from '../Images/facebook.svg'
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

function SignUpFreelance() {
  const [file,setFile] = useState(null);

  const handleFileChange = (e) =>{
    setFile(e.target.files[0]);
  };

  const handleUpload = async ()=>{
    if(!file) {
      alert('Please choose a file to upload');
      return;
    }

    try{
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://https://nfilili.com/upload', formData);
      console.log("File upload successfully:", response.data);
    } catch(error){
      console.log('Error uploading file:', error);
    }
  }

  return (
    <div>
       <div className="flex justify-center bg-gray-100 items-center w-full h-screen font-roboto">
      <div className="container p-4 max-w-5xl bg-white shadow-md rounded-lg text-center">
        <div className="mb-4">
            <div className='flex justify-center'>
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </div>

          <h3 className='font-medium text-2xl mt-4' style={{color:"#1E979C"}}>Sign Up as Freelancer</h3>
        </div>

        <div className='w-11/12 mx-6 flex items-center mt-16'>
        <div className="mb-4 flex items-center">
            <label className="text-gray-700 text-base w-32 font-normal mx-2 -mt-1">Name:</label>
            <div className='flex mx-4 flex-col mt-5 w-72'>
                <input
                type="text"
                className="w-72 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="e.g. John Doe"
                />
                <p className='text-sm flex mt-1 text-gray-400'>Please enter your full name</p>
            </div>
          </div>

          <div className="mb-6 flex items-center mx-10">
            <label for="file" className="text-gray-700 text-base font-normal mx-2 -mt-1">Resume:</label>
            <div className='flex mx-4 flex-col w-72'>
                <input
                type="text"
                className="w-72 h-8 py-2 px-4 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="Upload your resume"
                />
            </div>
          </div>
        </div>
        <input
                className='text-xs w-full px-96 mx-60 -my-52'
                type="file"
                id='file'
                name='file'
                multiple />

        <div className='w-11/12 mx-6 flex items-center'>
        <div className="mb-4 flex items-center">
            <label className="text-gray-700 text-base w-32 font-normal mx-2 -mt-1">PAN Number:</label>
            <div className='flex mx-4 flex-col mt-5 w-72'>
                <input
                type="text"
                className="w-72 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="e.g. 1773457890"
                />
                <p className='text-sm flex mt-1 text-gray-400'>Please input your registered PAN number</p>
            </div>
          </div>

          <div className="mb-4 flex items-center w-72 mx-10">
            <label className="text-gray-700 text-base font-normal mx-2 -mt-1">Location:</label>
            <div className='flex mx-4 w-72 gap-4'>

                <input
                type="text"
                className="w-48 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="e.g. Kathmandu"
                />

                <input
                type="text"
                className="w-20 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="Ward no."
                />                          
            </div>  

            <div className='mt-20' style={{marginLeft:"-305px"}}>
                <input
                    type="text"
                    className="w-72 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                    placeholder="Municipality"
                    />
            </div>
          </div>
        </div>

        <div className='w-11/12 mx-6 flex items-center'>
        <div className="mb-4 flex items-center">
            <label className="text-gray-700 text-base w-32 font-normal mx-2 -mt-1">Position:</label>
            <div className='flex mx-4 flex-col mt-5 w-72'>
                <input
                type="text"
                className="w-72 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="e.g. Software Developer"
                />
                <p className='text-sm flex mt-1 text-gray-400'>Select what role you would like to apply for</p>
            </div>
          </div>

          <div className="mb-4 flex items-center mx-10">
            <label className="text-gray-700 text-base font-normal mx-2 -mt-1">Linkedin:</label>
            <div className='flex mx-4 flex-col w-72'>
            <input
                type="text"
                className="w-72 h-8 py-2 px-3 border text-sm border-gray-300 bg-gray-200 rounded-xl outline-none"
                placeholder="Link to your resume"
                />
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-2'>
            <button
            onClick={handleUpload} 
            className='mx-6 justify-center rounded-lg text-white text-sm h-10 w-64 flex items-center my-4' style={{backgroundColor:"#1e979c"}}>
                Create an Account
            </button>
        </div>

        <div className='flex justify-center my-2'>
           <p className='text-sm'>Already have an account?</p> <a href='#' className='mx-2 text-sm hover:underline text-blue-500'>Login</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUpFreelance