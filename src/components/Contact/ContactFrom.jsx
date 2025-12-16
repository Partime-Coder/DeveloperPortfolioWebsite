import React, { useState } from 'react'
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Swal from 'sweetalert2'
import SocialBar from '../SocialBar';

function ContactFrom() {

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "d9b42617-cc98-4ed7-a788-94aa9988f980");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success",
    });
    event.target.reset();
  } else {
    Swal.fire({
      title: "Error",
      text: "Something went wrong. Please try again.",
      icon: "error",
    });
  }
};

  return (
    <div className=' w-full h-[calc(100%-60px)] flex flex-col lg:flex-row justify-center items-center relative'>

      <div className=' left w-full h-[40%] lg:w-1/2 lg:h-full flex justify-center items-center '>
        <div className='text-white'>
          <div className='w-[95%] lg:w-4/5'>
            <h2 className="text-3xl font-bold text-white mb-3">Let’s Talk</h2>
            <p className="text-white mb-6 leading-relaxed">
              Have a project, idea, or opportunity? Drop a message or reach out directly.
            </p>

            <div className="flex items-center gap-3 text-white">
              <FaEnvelope size={16} />
              <a
                href="mailto:sujalbhagat22@gmail.com" className="hover:text-purple-300 transition"
              >
                sujalbhagat22@gmail.com
              </a>
            </div>
            <div className='pt-5 flex justify-center sm:justify-start'>
            <SocialBar
             className="    text-white  text-lg sm:text-2xl "
                iconClass="hover:text-purple-300 transition"
            />
            </div>
          </div>
        </div>
      </div>


      <div className='right w-full h-3/5 lg:w-1/2 lg:h-full  flex justify-center items-center'>
        <div className='w-[95%] lg:w-4/5 bg-black/20 px-5 py-5 lg:py-10 rounded-lg '>
          <form 
          onSubmit={onSubmit}
          className=" space-y-1.5 lg:space-y-5">
            <div>
              <label className="block text-sm text-white mb-1">Name</label>
              <input
              placeholder='Enter your name'
              name='Name'
                type="text"
                required
                className="w-full rounded-lg bg-black/40 border border-gray-400/40 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Email</label>
              <input
              placeholder='Enter your email'
              name='Email'
                type="email"
                required
                className="w-full rounded-lg bg-black/40 border border-gray-400/40  px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/40"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Message</label>
              <textarea
              name='Message'
              placeholder='Enter your message'
                rows={4}
                required
                className="w-full rounded-lg bg-black/40 border border-gray-400/40  px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-400/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-400 hover:bg-purple-500 transition px-4 py-2 text-white font-medium cursor-pointer"
            >
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactFrom

