import React from 'react';
import { User, Users, ShieldCheck, MapPin, AlertCircle } from 'lucide-react';

const HelpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600"> 
            Be a Part of the Community
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Join us in building a safer and supportive environment for women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Section */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <User className="text-green-700 text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Register as a User
            </h2>
            <p className="text-lg mb-4">
              Take control of your safety with gesture-based SOS alerts,
              automatic location tracking, and access to a network of public
              CCTV-linked safety features.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="flex items-center hover:scale-105 hover:text-green-700 transition-transform duration-200">
                <AlertCircle className="text-gray-600 " />
                Gesture-based SOS
              </li>
              <li className="flex items-center hover:scale-105 hover:text-green-700 transition-transform duration-200">
                <MapPin className="text-gray-600 " />
                Automatic Location Tracking
              </li>
              <li className="flex items-center hover:scale-105 hover:text-green-700 transition-transform duration-200">
                <ShieldCheck className="text-gray-600 " />
                Public CCTV-linked Safety Features
              </li>
            </ul>
          </div>

          {/* Community Helper Section */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-green-700 text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Register as a Community Helper
            </h2>
            <p className="text-lg mb-4">
              Help protect women in your locality. You`ll receive instant alerts
              if any woman in your neighborhood needs assistance, allowing you
              to be a lifeline and make a real difference.
            </p>
          </div>

          {/* Combined User Section */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <User className="text-green-700 text-4xl" />
              <Users className="text-green-700 text-4xl ml-2" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Register as a Combined User
            </h2>
            <p className="text-lg mb-4">
              Stay safe while keeping others safe. Make a difference in your
              community! You`ll receive instant alerts if any women are in
              trouble in your locality, and you`ll also have access to safety
              features like gesture SOS and automatic location sharing linked
              with public CCTV cameras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
