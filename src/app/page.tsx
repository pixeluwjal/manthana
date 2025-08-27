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

// New Modal component to display success message and WhatsApp link
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="relative p-8 w-full max-w-sm mx-4 bg-white rounded-3xl shadow-xl transform transition-all duration-300 ease-in-out scale-95 sm:scale-100">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 animate-bounce-once">
            <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl leading-6 font-bold text-gray-900 mt-4">Registration Successful!</h3>
          <div className="mt-4">
            <p className="text-base text-gray-700">
              You're all set! Please join our WhatsApp group for important updates and information about the event.
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <a
            href="https://chat.whatsapp.com/KvarhMeCHMqAl7RAYViz1r"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all duration-300 items-center"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.03 2.75A9.25 9.25 0 004.774 17.763l-1.895 4.888 5.034-1.31a9.263 9.263 0 004.117 1.056H12a9.25 9.25 0 000-18.5zM12.03 4.25A7.75 7.75 0 0112 19.75h-.03a7.733 7.733 0 01-3.694-.969l-3.83 1.002 1.01-3.824a7.75 7.75 0 01-.892-3.709A7.75 7.75 0 0112.03 4.25zm.001 2.5a5.75 5.75 0 00-4.08 9.855l-.234.234a5.75 5.75 0 00.323.323a.75.75 0 10.602 1.258l.102-.048a.75.75 0 00-.01-.013c.002-.002.004-.004.006-.006a.75.75 0 00.007-.008l1.417 1.417a.75.75 0 001.06 0l.235-.235a5.75 5.75 0 009.855-4.08V12a5.75 5.75 0 00-5.75-5.75zM12.03 8.75a.75.75 0 00-.75.75v3.25a.75.75 0 001.5 0V9.5a.75.75 0 00-.75-.75z" />
            </svg>
            Join WhatsApp Group
          </a>
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-sm px-4 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(true);
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
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
          color: #6B7280;
          font-size: 0.875rem;
        }
        
        .input-field:focus ~ .floating-label,
        .input-field:not(:placeholder-shown) ~ .floating-label {
          transform: translateY(-1.25rem) scale(0.85);
          color: #EA580C;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .form-section {
          scroll-behavior: smooth;
        }

        @keyframes bounce-once {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
      
      <div className="max-w-6xl w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left side - Visual element */}
        <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#7C0F00] to-[#E65911] text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Manthana Program</h1>
                <h2 className="text-xl font-semibold opacity-90 mt-1">Viruddha Ahaara</h2>
              </div>
            </div>
            <p className="mt-6 text-orange-100 text-lg leading-relaxed">Join us for an enlightening session on food incompatibilities according to Ayurveda.</p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm">Samskrita Bharati, Aksharam</span>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm">1 Hour Session</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-8">
            <div className="animate-float">
              <svg className="w-full h-48" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350,180 C400,130 370,80 300,80 C230,80 200,130 250,180 C300,230 300,230 350,180 Z" fill="rgba(255,255,255,0.1)" />
                <path d="M150,150 C180,110 160,70 120,70 C80,70 70,110 100,150 C130,190 120,190 150,150 Z" fill="rgba(255,255,255,0.1)" />
                <circle cx="350" cy="110" r="40" fill="rgba(255,255,255,0.1)" />
                <path d="M70,200 C90,180 110,190 120,210 C130,230 150,230 160,210" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="w-full lg:w-3/5 bg-white p-8 md:p-10 form-section">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-[#7C0F00] to-[#E65911] bg-clip-text text-transparent">Register Now</h2>
            <p className="mt-3 text-gray-600 text-lg">Fill out the form to secure your spot at our enlightening session</p>
          </div>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              {/* Mobile Field */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                </div>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              
              {/* Address Line 1 */}
              <div className="relative md:col-span-2">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                </div>
                <input
                  id="address1"
                  name="address1"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your address"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </div>
              
              {/* Address Line 2 */}
              <div className="relative md:col-span-2">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
                </div>
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </div>
              
              {/* Locality */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <label htmlFor="locality" className="block text-sm font-medium text-gray-700">Locality</label>
                </div>
                <input
                  id="locality"
                  name="locality"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Your locality"
                  value={formData.locality}
                  onChange={handleChange}
                />
              </div>
              
              {/* Pincode */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pin Code</label>
                </div>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Your area pin code"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              
              {/* Blood Group */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
                </div>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-transparent appearance-none"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select your blood group</option>
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
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none mt-5">
                  <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              
              {/* Year of Birth */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <label htmlFor="yearOfBirth" className="block text-sm font-medium text-gray-700">Year of Birth</label>
                </div>
                <input
                  id="yearOfBirth"
                  name="yearOfBirth"
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Your birth year"
                  value={formData.yearOfBirth}
                  onChange={handleChange}
                />
              </div>
              
              {/* Email */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              {/* Number of Persons */}
              <div className="relative">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <label htmlFor="numPersons" className="block text-sm font-medium text-gray-700">No. of Persons</label>
                </div>
                <input
                  id="numPersons"
                  name="numPersons"
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="How many people?"
                  value={formData.numPersons}
                  onChange={handleChange}
                />
              </div>
              
              {/* Referrer */}
              <div className="relative md:col-span-2">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <label htmlFor="referrer" className="block text-sm font-medium text-gray-700">Referrer</label>
                </div>
                <input
                  id="referrer"
                  name="referrer"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  placeholder="Name of RSS karyakartha who referred you"
                  value={formData.referrer}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-[#7C0F00] to-[#E65911] hover:from-[#9a1300] hover:to-[#f36c2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E65911] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:transform-none shadow-md hover:shadow-xl"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="spinner"></div>
                    <span className="ml-2">Processing Registration...</span>
                  </div>
                ) : (
                  <>
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                    </svg>
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
            <div className={`mt-8 p-4 rounded-xl text-center ${message.includes("successful") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}>
              <div className="flex items-center justify-center">
                {message.includes("successful") ? (
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )}
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* The Modal component is rendered here, controlled by state */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;