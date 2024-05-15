import { IoCloseCircleOutline } from "react-icons/io5"
import { useRef } from 'react';

const ContactUs = ({onClose}) => {

    const modalRef=useRef();
    
    const closeModal=(e)=>{
     if(modalRef.current===e.target){
        onClose();
     }
    }
  return (
    <div ref={modalRef} onClick= {closeModal} className="text-white z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
        <div className='flex flex-col'>
            <button onClick={onClose} className='place-self-end'>X</button>
            <div className="border border-blue-100 py-8 px-10 bg-hero2 bg-contain bg-[#3A2D3F] rounded-xl flex flex-col gap-5 ">
                <h1 className=" font-extrabold text-3xl text-primary text-center">Contact us</h1>

                <hr />
                <p className='text-xl font-bold max-w-72 text-center text-secondary'>
                support@enteBuddy
                </p>
               
            </div>
    
        </div>
    
    </div>
  )
}

export default ContactUs