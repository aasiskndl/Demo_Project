import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const MtechBilling = () => {
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
        .matches(/^[0-9]*$/, 'Enter valid phone number')
        .required('Phone Number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert('Form Submitted Successfully');
      resetForm();
    },
  });

  return (
    <div className="bg-secondary min-h-screen p-4 sm:p-6 md:p-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            M-Tech Billing
          </span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed bg-yellow-50 p-4 rounded-lg shadow-sm">
          M-Tech Billing is a powerful online billing software solution, fully certified by the Inland Revenue Department (IRD) of Nepal. 
          Designed for businesses of all sizes, our platform streamlines your invoicing and billing processes while ensuring 
          full compliance with government regulations.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Contact Card */}
        <div className="bg-answer rounded-xl shadow-lg p-6 md:p-8 transform transition hover:scale-[1.01] duration-200">
          <div className="mb-6">
            <div className="flex flex-col items-start">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-600">Contact Information</h2>
              <div className="flex flex-col gap-3 md:gap-4 w-full">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-yellow-500 text-lg md:text-xl" />
                  <span className='text-xs md:text-sm'>01-5925122</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-yellow-500 text-lg md:text-xl" />
                  <span className='text-xs md:text-sm'>info@matrikatec.com.np</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-500 text-lg md:text-xl" />
                  <span className='text-xs md:text-sm'>New Baneshwor, Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-yellow-500 text-lg md:text-xl" />
                  <div>
                    <p className="text-xs md:text-sm">Sun-Fri: 9AM - 5PM</p>
                    <p className="text-xs md:text-sm">Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Matrika Technology Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.287234044407!2d85.31747031505696!3d27.67705098280283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c10c9b7667%3A0x391e1dbf54d9249d!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1625555555555!5m2!1sen!2snp"
                className="w-full h-40 sm:h-48"
                allowFullScreen
                loading="lazy"
                title="Matrika Technology Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-answer rounded-xl shadow-lg p-6 md:p-8 transform transition hover:scale-[1.01] duration-200">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaPaperPlane className="text-yellow-500" />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name*</label>
              <input
                type="text"
                name="name"
                {...formik.getFieldProps('name')}
                className={`w-full px-3 py-2 rounded-lg border ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:ring-1 focus:ring-yellow-500 focus:border-transparent`}
                placeholder=""
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone*</label>
                <input
                  type="text"
                  name="phone"
                  {...formik.getFieldProps('phone')}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-1 focus:ring-yellow-500 focus:border-transparent`}
                  placeholder="+977 9841XXXXXX"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  {...formik.getFieldProps('email')}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-1 focus:ring-yellow-500 focus:border-transparent`}
                  placeholder="ram@example.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Subject*</label>
              <input
                type="text"
                name="subject"
                {...formik.getFieldProps('subject')}
                className={`w-full px-3 py-2 rounded-lg border ${
                  formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-300'
                } focus:ring-1 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="Inquiry about services"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.subject}</p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message*</label>
              <textarea
                name="message"
                rows="3"
                {...formik.getFieldProps('message')}
                className={`w-full px-3 py-2 rounded-lg border ${
                  formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:ring-1 focus:ring-yellow-500 focus:border-transparent`}
                placeholder="Your message..."
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 px-4 rounded-lg font-medium
                        hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MtechBilling;