"use client";
import { useState } from "react";
import { FaPlane, FaCalendarAlt, FaHeart } from 'react-icons/fa';

type TripFormData = {
  destination: string;
  days: number;
  vibe: string;
};

export default function Home() {
  const [formData, setFormData] = useState<TripFormData>({
    destination: "",
    days: 1,
    vibe: "adventure"
  });
  const [res, setRes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'days' ? parseInt(value) : value
    }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const r = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setRes(await r.text());
    } catch (error) {
      setRes("Error: " + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Hero Section with Background Pattern */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Trip Sherpa
            </h1>
            <p className="mt-4 max-w-md mx-auto text-xl text-indigo-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Your AI travel companion
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="px-8 py-10">
              <form onSubmit={submit} className="space-y-8">
                {/* Destination Input */}
                <div className="relative group">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                    Where do you want to go?
                  </label>
                  <div className="relative rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaPlane className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3 border-2 border-indigo-100 rounded-xl leading-5 bg-white/50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your dream destination"
                      required
                    />
                  </div>
                </div>

                {/* Days Input */}
                <div className="relative group">
                  <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-2">
                    How many days?
                  </label>
                  <div className="relative rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaCalendarAlt className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="number"
                      id="days"
                      name="days"
                      value={formData.days}
                      onChange={handleChange}
                      min="1"
                      max="30"
                      className="block w-full pl-12 pr-4 py-3 border-2 border-indigo-100 rounded-xl leading-5 bg-white/50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Vibe Select */}
                <div className="relative group">
                  <label htmlFor="vibe" className="block text-sm font-medium text-gray-700 mb-2">
                    What's your travel style?
                  </label>
                  <div className="relative rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaHeart className="h-5 w-5 text-indigo-500" />
                    </div>
                    <select
                      id="vibe"
                      name="vibe"
                      value={formData.vibe}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-4 py-3 border-2 border-indigo-100 rounded-xl leading-5 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="adventure">Adventure & Exploration</option>
                      <option value="relaxation">Relaxation & Wellness</option>
                      <option value="cultural">Cultural Experience</option>
                      <option value="foodie">Food & Culinary</option>
                      <option value="luxury">Luxury & Comfort</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Planning Your Trip...
                      </div>
                    ) : (
                      "Plan My Trip"
                    )}
                  </button>
                </div>
              </form>

              {/* Response Section */}
              {res && (
                <div className="mt-10">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Personalized Itinerary</h2>
                    <pre className="bg-white/80 p-4 rounded-xl overflow-auto text-sm text-gray-700 border border-indigo-100">
                      {res}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}