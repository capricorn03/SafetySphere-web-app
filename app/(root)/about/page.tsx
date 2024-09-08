import React from 'react';
import { Users, MapPin, Shield, Brain } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-screen-xl py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Team */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Our Team: Safe-Innovators
            </h2>
            <p className="text-gray-600">
              We are Safe-Innovators, a dedicated team of students from ARSD
              College, united by a passion for creating a safer world for women.
              We believe that technology and community engagement can empower
              women and make them feel secure on the road.
            </p>
          </div>

          {/* Card 2: Location */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Our Reach</h2>
            <p className="text-gray-600">
              Our vision extends beyond borders. We aim to make a difference in
              communities worldwide, ensuring that women everywhere feel safe
              and empowered.
            </p>
          </div>

          {/* Card 3: Technology */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Our Technology</h2>
            <p className="text-gray-600">
              At the heart of our mission lies cutting-edge technology. We
              leverage the power of AI to analyze public CCTV footage in
              real-time, identifying potential risks and providing women with
              timely assistance when needed.
            </p>
          </div>

          {/* Card 4: Safety */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              We strive to create a world where women can move freely without
              fear. By combining technological innovation with community
              engagement, we aim to build a safer and more empowering
              environment for women everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
