
import { useFormik } from "formik"
import * as Yup from "yup"
import ContactCard from "../ContactCard"
import FormCard from "../FormCard"
import LocationMap from "../LocationMap"
import MatecRestaurantHero from "./MatecRestaurantHero"

const MatecRestaurant = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[^0-9]*$/, "Enter Valid Name")
        .required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10-digit phone number")
        .required("Phone Number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      alert("Form Submitted Successfully")
    },
  })

  return (
    <div
      className="bg-secondary px-4 sm:px-6 md:px-8 py-8 flex flex-col items-center gap-12"
      style={{ minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <MatecRestaurantHero />

      {/* Cards Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormCard formik={formik} />
        <ContactCard />
      </div>

      {/* Location Map Section */}
      <div id="location-section" className="w-full max-w-6xl mt-0 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 text-center">
          Our Location
        </h2>
        <div className="w-full h-[350px] relative sm:h-[400px] md:h-[450px] border-2 border-yellow-400 rounded-md overflow-hidden shadow-md">
          <LocationMap />
        </div>
      </div>
    </div>

  )
}

export default MatecRestaurant

