import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ContactCard from '../ContactCard';
import FormCard from '../FormCard';
import LocationMap from '../LocationMap';
import JJewelleryHero from './JJewelleryHero';
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
      <JJewelleryHero />

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