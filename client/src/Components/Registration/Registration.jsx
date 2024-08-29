import logo from "../../assets/logo.png";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const Registration = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div>
          <img
            src={logo}
            alt="Shabuj Global Education"
            className="mx-auto py-8"
          />
          <hr />
          <h1 className="text-2xl text-left pl-8 text-gray-800 mt-8">
            STUDENT REGISTRATION FORM
          </h1>
        </div>
        <form className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between bg-slate-100 px-4 py-2 rounded-md mb-4">
              <h2 className="font-semibold text-lg text-gray-700 mb-2">
                Basic Information
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="ex: myname@example.com"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between bg-slate-100 px-4 py-2 rounded-md mb-4">
              <h2 className="font-semibold text-lg text-gray-700 mb-2">
                Academic Information
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Last Academic Qualification"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Interested Course"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Interested University"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
          <button className="underline my-2 pl-8 font-medium text-gray-500">
            Clear Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
