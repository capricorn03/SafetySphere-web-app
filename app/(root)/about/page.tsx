const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        </div>

        {/* Animated Card */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-lg">
          <p className="text-lg mb-4">
            We are a group of students from ARSD College, passionate about
            making women feel safer on the road.
          </p>
          <p className="text-lg mb-4">
            Our platform leverages the power of AI to provide real-time
            analytics using public CCTV cameras, helping to identify potential
            risks and provide assistance when needed.
          </p>
          <p className="text-lg mb-8">
            We believe that by combining technology with community engagement,
            we can create a safer and more empowering environment for women
            everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
