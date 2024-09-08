const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
          <p className="text-lg mt-4 text-gray-600">
            Feel free to reach out to our team anytime!
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
          <p className="text-lg mb-4 text-gray-700">
            We`d love to hear from you! Get in touch with us at: 
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>
          </p>
        </div>

        {/* Meet the Team Section */}
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Meet the Team</h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 1]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-1]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Team Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 2]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-2]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Team Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 3]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-3]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Team Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"style={{ marginBottom:"30px" }}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 4]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-4]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Team Card 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl" style={{ marginBottom:"30px" }}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 5]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-5]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Team Card 6 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-xl" style={{ marginBottom:"30px" }}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              [Student Name 6]
            </h3>
            <p className="text-gray-600 mb-4">[Student Role/Area of Expertise]</p>
            <a
              href="https://www.linkedin.com/in/[linkedin-profile-url-6]"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
