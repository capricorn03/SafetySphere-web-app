const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Contact Us</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-lg mb-4">
            Get in touch with us! You can reach us at:
          </p>
         

          <h2 className="text-2xl font-bold text-orange-600 mb-4 mt-8">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student 1 */}
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 1]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-1]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>

            {/* Student 2 */}
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 2]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-2]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>

            {/* Student 3 */}
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 3]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-3]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 3]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-3]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 3]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-3]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                [Student Name 3]
              </h3>
              <p className="text-gray-600">[Student Role/Area of Expertise]</p>
              <a
                href="https://www.linkedin.com/in/[linkedin-profile-url-3]"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
