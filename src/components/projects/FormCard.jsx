
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const FormCard = ({ formik }) => {
  return (
    <div className="bg-answer rounded-xl shadow-lg p-6 md:p-8 transform transition hover:scale-[1.01] duration-200 order-1 md:order-none">
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
              placeholder="9841XXXXXX"
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
  );
};

export default FormCard;