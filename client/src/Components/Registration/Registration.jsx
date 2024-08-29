import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../../assets/logo.png";

const Registration = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    lastQualification: "",
    interestedCourse: "",
    interestedUniversity: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value && isFormTouched ? "This field is mandatory" : "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: !value && isFormTouched ? "This field is mandatory" : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormTouched(true);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && formData[key] !== undefined) {
        newErrors[key] = "This field is mandatory";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
    }
  };

  const handleFieldFocus = () => {
    setIsPhoneFocused(false);
  };

  const handlePhoneFocus = () => {
    setIsPhoneFocused(true);
  };

  const handlePhoneBlur = () => {
    setIsPhoneFocused(false);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsPhoneFocused(false);
    setIsFormTouched(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
        <div>
          <img
            src={logo}
            alt="Shabuj Global Education"
            className="mx-auto py-4 md:py-8"
          />
          <hr />
          <h1 className="text-xl md:text-2xl text-left pl-4 md:pl-8 text-gray-800 mt-4 md:mt-8">
            STUDENT REGISTRATION FORM
          </h1>
        </div>
        <form className="p-4 md:p-8" onSubmit={handleSubmit}>
          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-between bg-slate-100 px-2 md:px-4 py-2 rounded-md mb-4">
              <h2 className="font-semibold text-base md:text-lg text-gray-700">
                Basic Information
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={`border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } w-full rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onFocus={handleFieldFocus}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className={`border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } w-full rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onFocus={handleFieldFocus}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 mt-4">
              <div>
                <PhoneInput
                  country={"bd"}
                  enableSearch={true}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  dropdownClass="shadow-lg"
                  containerClass="w-full"
                  inputStyle={{
                    padding: "20px 40px",
                    borderRadius: "8px",
                    border: errors.phoneNumber
                      ? "2px solid red"
                      : isPhoneFocused
                      ? "2px solid #3b82f6"
                      : "1px solid #D1D5DB",
                  }}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ex: myname@example.com"
                  className={`border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } w-full rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onFocus={handleFieldFocus}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-between bg-slate-100 px-2 md:px-4 py-2 rounded-md mb-4">
              <h2 className="font-semibold text-base md:text-lg text-gray-700">
                Academic Information
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
              <div>
                <input
                  type="text"
                  name="lastQualification"
                  value={formData.lastQualification}
                  onChange={handleInputChange}
                  placeholder="Last Academic Qualification"
                  className={`border ${
                    errors.lastQualification
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onFocus={handleFieldFocus}
                />
                {errors.lastQualification && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastQualification}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="interestedCourse"
                  value={formData.interestedCourse}
                  onChange={handleInputChange}
                  placeholder="Interested Course"
                  className={`border ${
                    errors.interestedCourse
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  onFocus={handleFieldFocus}
                />
                {errors.interestedCourse && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.interestedCourse}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="interestedUniversity"
                value={formData.interestedUniversity}
                onChange={handleInputChange}
                placeholder="Interested University"
                className={`border ${
                  errors.interestedUniversity
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg px-3 md:px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
                onFocus={handleFieldFocus}
              />
              {errors.interestedUniversity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.interestedUniversity}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center mb-4">
            <button
              type="submit"
              className="bg-black text-white font-semibold py-2 px-8 rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              Submit
            </button>
          </div>
          <hr />
          <button
            type="button"
            onClick={resetForm}
            className="underline my-2 pl-4 md:pl-8 font-medium text-gray-500"
          >
            Clear Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
