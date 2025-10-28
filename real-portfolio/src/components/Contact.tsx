import React, { useActionState } from 'react'
import emailjs from '@emailjs/browser';
import Reveal from './utils/Reveal';

const sendEmail = async (templateParams) => {
    try {
    const response = await emailjs
    .send(
      'service_yuygfd2',
       'template_lnur4u4',
        templateParams, {publicKey: 'ijlPoTTKcSCYairA7'}
    );
    console.log('SUCCESS!', response.status, response.text);
    return {success: true}
    } catch (error) {
    console.log('FAILED!', error);
    return {success: false, message:'Message failed to send. Please try again later.'
    }
    }
  };


const submitForm = async (prevState, formData ) => {
  const templateParams = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const response = await sendEmail(templateParams);
  return response;  
}

export default function Contact(): React.ReactElement {
  const [state, handleSubmit, isPending] = useActionState(submitForm, null);


  



  return (
    <Reveal>
    <section id="contact" className="mt-6 bg-white rounded-lg p-6 shadow-md font-josefin border-3 border-sky-800">
      
      <h3 className="text-6xl font-light font-outfitP mb-3 text-[#759DC5]">Contact</h3>
      <p className="text-gray-600 font-josefin">Email me at <a className="text-indigo-600 hover:underline" href="mailto:kevin.huynh.4414@gmail.com">kevin.huynh.4414@gmail.com</a></p>
       <form action={handleSubmit} className="flex flex-col gap-2 mt-4">
        <label className="mt-2 font-medium">Name:* </label>
        <input type="text" name="name" required className="border-2 border-gray-400 p-2 rounded-md focus:border-[#759DC5] w-40"></input>
        <label className="mt-2 font-medium" >Email:* </label>
        <input type="email" name="email" required className="border-2 border-gray-400 p-2 rounded-md focus:border-[#759DC5] w-80"></input>
        <label className="mt-3 font-medium">Message:* </label>
        <textarea required className="border-3 border-gray-400 p-2 mb-2 rounded-md focus:border-[#759DC5]"
        name="message"
        rows={6}></textarea>
        <div className="flex justify-end px-2">
        {state?.success && (<div className='mb-4 text-green-600 font-bold text-xl mr-4'>Received! Thank you for your message!</div>)}
        <button className=" text-white py-1 px-2.5 border-3 border-sky-800 rounded-md w-fit h-fit flex justify-center items-center cursor-pointer bg-[#759DC5]" type="submit" disabled={isPending}>Submit</button>
        </div>
    </form>
    </section>
    </Reveal>
  )
}
