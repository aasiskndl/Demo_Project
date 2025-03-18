import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ContactCard from '../ContactCard';
import FormCard from '../FormCard';
import LocationMap from '../LocationMap';
const JJewellery = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[^0-9]*$/, 'Enter Valid Name')
        .required('Name is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter valid 10-digit phone number')
        .required('Phone Number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert('Form Submitted Successfully');
    },
  });

  return (
    <div className="bg-secondary min-h-screen p-4 sm:p-6 md:p-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            JJewellery
          </span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed bg-yellow-50 p-4 rounded-lg shadow-sm">
          JJewellery is a comprehensive software solution tailored for jewelry businesses, offering features like order management, billing, auto gold rate, stock control, karigar stock,
          jewellery tag printing, and loan management. This all-in-one tool simplifies your business operations, helping you manage customer orders, track inventory, and handle financial
          transactions with ease. JJewellery is designed to enhance efficiency and accuracy in your jewelry business, providing a seamless experience for both you and your customers.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <FormCard formik={formik} />
        <ContactCard />
      </div>
      {/* Map Component*/}
      <div id="location-section" className="w-full ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Our Location
        </h2>
        <div className="w-full h-[450px] relative border-2 border-yellow-400 rounded-none overflow-hidden ">
          <LocationMap />
        </div>
      </div>

    </div>
  );
};

export default JJewellery;