"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  mobile: string;
  address1: string;
  address2: string;
  locality: string;
  pincode: string;
  bloodGroup: string;
  yearOfBirth: string;
  email: string;
  numPersons: string;
  referrer: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    address1: "",
    address2: "",
    locality: "",
    pincode: "",
    bloodGroup: "",
    yearOfBirth: "",
    email: "",
    numPersons: "",
    referrer: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbxFWJupbPEkEEOlVDVGL_CoketYxUeb3KQPyZW5KJIPOIn_98Fp_kAoLD9VxNq2NCqy/exec";

    try {
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      const result = await response.json();
      if (result.result === "success") {
        setMessage("Registration successful!");
        setFormData({
          name: "",
          mobile: "",
          address1: "",
          address2: "",
          locality: "",
          pincode: "",
          bloodGroup: "",
          yearOfBirth: "",
          email: "",
          numPersons: "",
          referrer: "",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .floating-label {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          transform-origin: left top;
          transition: all 0.2s ease-out;
        }
        
        .input-field:focus ~ .floating-label,
        .input-field:not(:placeholder-shown) ~ .floating-label {
          transform: translateY(-1.25rem) scale(0.85);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      
      <div className="max-w-4xl w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        {/* Left side - Visual element */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-[#7C0F00] to-[#E65911] text-white p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Manthana Program</h1>
            <h2 className="text-xl font-semibold opacity-90">Viruddha Ahaara</h2>
            <p className="mt-4 text-orange-100">Join us for an enlightening session on food incompatibilities according to Ayurveda.</p>
          </div>
          
          <div className="relative z-10 mt-8 animate-float">
            <svg className="w-full h-40" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M300,150 C350,100 320,50 250,50 C180,50 150,100 200,150 C250,200 250,200 300,150 Z" fill="rgba(255,255,255,0.1)" />
              <path d="M100,120 C130,80 110,40 70,40 C30,40 20,80 50,120 C80,160 70,160 100,120 Z" fill="rgba(255,255,255,0.1)" />
              <circle cx="300" cy="80" r="40" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>
          
          <div className="relative z-10 mt-8">
            <div className="flex items-center space-x-2 text-orange-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Samskrita Bharati, Aksharam
</span>
            </div>
            <div className="flex items-center space-x-2 text-orange-200 mt-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>1 Hour Session</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="w-full md:w-3/5 bg-white p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Register Now</h2>
            <p className="mt-2 text-gray-600">Fill out the form to secure your spot</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="floating-label text-gray-600">
                  Name *
                </label>
              </div>
              
              {/* Mobile Field */}
              <div className="relative">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <label htmlFor="mobile" className="floating-label text-gray-600">
                  Mobile Number *
                </label>
              </div>
              
              {/* Address Line 1 */}
              <div className="relative md:col-span-2">
                <input
                  id="address1"
                  name="address1"
                  type="text"
                  required
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Address Line 1"
                  value={formData.address1}
                  onChange={handleChange}
                />
                <label htmlFor="address1" className="floating-label text-gray-600">
                  Address Line 1 *
                </label>
              </div>
              
              {/* Address Line 2 */}
              <div className="relative md:col-span-2">
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Address Line 2"
                  value={formData.address2}
                  onChange={handleChange}
                />
                <label htmlFor="address2" className="floating-label text-gray-600">
                  Address Line 2
                </label>
              </div>
              
              {/* Locality */}
              <div className="relative">
                <input
                  id="locality"
                  name="locality"
                  type="text"
                  required
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Locality"
                  value={formData.locality}
                  onChange={handleChange}
                />
                <label htmlFor="locality" className="floating-label text-gray-600">
                  Locality *
                </label>
              </div>
              
              {/* Pincode */}
              <div className="relative">
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  required
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Pin Code"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                <label htmlFor="pincode" className="floating-label text-gray-600">
                  Pin Code *
                </label>
              </div>
              
              {/* Blood Group */}
              <div className="relative">
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] bg-transparent appearance-none"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value=""></option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="Unknown">Unknown</option>
                </select>
                <label htmlFor="bloodGroup" className="floating-label text-gray-600">
                  Blood Group
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              
              {/* Year of Birth */}
              <div className="relative">
                <input
                  id="yearOfBirth"
                  name="yearOfBirth"
                  type="number"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Year of Birth"
                  value={formData.yearOfBirth}
                  onChange={handleChange}
                />
                <label htmlFor="yearOfBirth" className="floating-label text-gray-600">
                  Year of Birth
                </label>
              </div>
              
              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="floating-label text-gray-600">
                  Email ID
                </label>
              </div>
              
              {/* Number of Persons */}
              <div className="relative">
                <input
                  id="numPersons"
                  name="numPersons"
                  type="number"
                  required
                  min="1"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="No. of Persons"
                  value={formData.numPersons}
                  onChange={handleChange}
                />
                <label htmlFor="numPersons" className="floating-label text-gray-600">
                  No. of Persons *
                </label>
              </div>
              
              {/* Referrer */}
              <div className="relative md:col-span-2">
                <input
                  id="referrer"
                  name="referrer"
                  type="text"
                  className="input-field peer w-full px-4 py-3 border-0 border-b-2 border-gray-300 text-gray-900 focus:ring-0 focus:border-[#E65911] placeholder-transparent transition-all duration-200"
                  placeholder="Referrer"
                  value={formData.referrer}
                  onChange={handleChange}
                />
                <label htmlFor="referrer" className="floating-label text-gray-600">
                  Name of RSS karyakartha who referred
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-md font-semibold rounded-md text-white bg-gradient-to-r from-[#7C0F00] to-[#E65911] hover:from-[#9a1300] hover:to-[#f36c2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E65911] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none shadow-md hover:shadow-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="spinner"></div>
                    <span className="ml-2">Registering...</span>
                  </div>
                ) : (
                  <>
                    Register Now
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

          {message && (
            <div className={`mt-6 p-4 rounded-lg text-center ${message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message}
            </div>
          )}

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              For further communication, please join our WhatsApp group:
              <a
                href="https://chat.whatsapp.com/KvarhMeCHMqAl7RAYViz1r"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#E65911] hover:text-[#D54D0E] pl-1 inline-flex items-center"
              >
                Join WhatsApp Group
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;