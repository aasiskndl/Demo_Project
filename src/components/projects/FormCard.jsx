// import { User, Phone, Mail, AlignLeft, MessageSquare } from "lucide-react"

// export default function FormCard({ formik }) {
//     return (
//         <div className="bg-white overflow-hidden">
//             <div className="p-6 md:p-8">
//                 <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Contact us</h1>
//                 <p className="text-gray-500 mb-6">
//                     Feel free to contact us anytime. We will get back to you as soon as possible
//                 </p>

//                 <form onSubmit={formik.handleSubmit}>
//                     <div className="mb-4">
//                         <div
//                             className={`flex border ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
//                         >
//                             <div className="flex items-center justify-center w-16 border-r border-gray-300">
//                                 <User className="text-gray-500" size={20} />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={formik.values.name}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className="w-full p-3 outline-none"
//                             />
//                         </div>
//                         {formik.touched.name && formik.errors.name && (
//                             <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
//                         )}
//                     </div>

//                     <div className="flex flex-col md:flex-row gap-4 mb-4">
//                         <div className="flex-1">
//                             <div
//                                 className={`flex border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
//                             >
//                                 <div className="flex items-center justify-center w-16 border-r border-gray-300">
//                                     <Phone className="text-gray-500" size={20} />
//                                 </div>
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     name="phone"
//                                     placeholder="Phone"
//                                     value={formik.values.phone}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className="w-full p-3 outline-none"
//                                 />
//                             </div>
//                             {formik.touched.phone && formik.errors.phone && (
//                                 <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
//                             )}
//                         </div>

//                         <div className="flex-1">
//                             <div
//                                 className={`flex border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
//                             >
//                                 <div className="flex items-center justify-center w-16 border-r border-gray-300">
//                                     <Mail className="text-gray-500" size={20} />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     className="w-full p-3 outline-none"
//                                 />
//                             </div>
//                             {formik.touched.email && formik.errors.email && (
//                                 <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
//                             )}
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <div
//                             className={`flex border ${formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
//                         >
//                             <div className="flex items-center justify-center w-16 border-r border-gray-300">
//                                 <AlignLeft className="text-gray-500" size={20} />
//                             </div>
//                             <input
//                                 type="text"
//                                 id="subject"
//                                 name="subject"
//                                 placeholder="Subject"
//                                 value={formik.values.subject}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className="w-full p-3 outline-none"
//                             />
//                         </div>
//                         {formik.touched.subject && formik.errors.subject && (
//                             <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
//                         )}
//                     </div>

//                     <div className="mb-6">
//                         <div
//                             className={`flex border ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
//                         >
//                             <div className="flex items-center justify-center w-16 border-r border-gray-300 h-40">
//                                 <MessageSquare className="text-gray-500" size={20} />
//                             </div>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 placeholder="Type your message here"
//                                 value={formik.values.message}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className="w-full min-h-[159px] max-h-[300px] p-3 outline-none resize-y overflow-auto hover:border-gray-600 focus:border-gray-600 transition-all duration-300"
//                             />

//                         </div>
//                         {formik.touched.message && formik.errors.message && (
//                             <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
//                         )}
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-[#1a1a1a] text-white py-3 px-8 font-medium uppercase hover:bg-gray-800 transition-colors"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }





import { User, Phone, Mail, AlignLeft, MessageSquare } from "lucide-react"

export default function FormCard({ formik }) {
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Call Formik's handleSubmit to perform validation
        formik.handleSubmit();

        // Check if there are no errors
        if (Object.keys(formik.errors).length === 0) {
            // Reset the form values after successful submission
            formik.resetForm();
        }
    };

    return (
        <div className="bg-white overflow-hidden">
            <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Contact us</h1>
                <p className="text-gray-500 mb-6">
                    Feel free to contact us anytime. We will get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <div
                            className={`flex border ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
                        >
                            <div className="flex items-center justify-center w-16 border-r border-gray-300">
                                <User className="text-gray-500" size={20} />
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full p-3 outline-none"
                            />
                        </div>
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <div
                                className={`flex border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
                            >
                                <div className="flex items-center justify-center w-16 border-r border-gray-300">
                                    <Phone className="text-gray-500" size={20} />
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full p-3 outline-none"
                                />
                            </div>
                            {formik.touched.phone && formik.errors.phone && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                            )}
                        </div>

                        <div className="flex-1">
                            <div
                                className={`flex border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
                            >
                                <div className="flex items-center justify-center w-16 border-r border-gray-300">
                                    <Mail className="text-gray-500" size={20} />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="w-full p-3 outline-none"
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <div
                            className={`flex border ${formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
                        >
                            <div className="flex items-center justify-center w-16 border-r border-gray-300">
                                <AlignLeft className="text-gray-500" size={20} />
                            </div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full p-3 outline-none"
                            />
                        </div>
                        {formik.touched.subject && formik.errors.subject && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
                        )}
                    </div>

                    <div className="mb-6">
                        <div
                            className={`flex border ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"} hover:border-gray-600 transition-all duration-300`}
                        >
                            <div className="flex items-center justify-center w-16 border-r border-gray-300 h-40">
                                <MessageSquare className="text-gray-500" size={20} />
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type your message here"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full min-h-[159px] max-h-[300px] p-3 outline-none resize-y overflow-auto hover:border-gray-600 focus:border-gray-600 transition-all duration-300"
                            />
                        </div>
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1a1a1a] text-white py-3 px-8 font-medium uppercase hover:bg-gray-800 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

