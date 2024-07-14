/* eslint-disable react/no-unescaped-entities */
// src/components/Home.jsx
import logo1 from "../../public/logo1.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      {/* <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-800">Logo</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 text-center md:text-left">
                A platform to host events, invite participants.
              </h1>
              <p className="text-lg text-gray-700 mt-4 text-center md:text-left font-semibold">
                A short description or tagline about your website or business.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                {/* <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
                >
                  Get Started
                </a> */}
              </div>
            </div>
            <div className="md:w-1/2 md:order-2">
              <img
                src={logo1}
                alt="Illustration"
                className="mx-auto md:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Our Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Light Dinner
              </h3>
              <p className="text-gray-700 font-semibold">
                Light Dinner: Join us for a delightful evening with a warm meal,
                great vibes, and wonderful company.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Out Door
              </h3>
              <p className="text-gray-700 font-semibold">
                Outdoor Activity: Let's explore nature together, go hiking, or
                have a picnic.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Festivities
              </h3>
              <p className="text-gray-700 font-semibold">
                Festivities: Join us in celebrating our holiday and get a
                glimpse of how we enjoy our festivities with our family and
                freinds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="font-semibold text-lg">Be my Guest 2024</span>
          </div>
          <div>
            <p>&copy; 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
