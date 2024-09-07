import Image from 'next/image';

const AppDownloadPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Download Our App</h1>
          <h2 className="text-2xl font-bold text-orange-600 mt-2">
            Stay Safe, Stay Empowered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* App Screenshot Section */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Image
              src="/app-screenshot.png" // Replace with actual app screenshot
              alt="App Screenshot"
              width={300}
              height={500}
              className="rounded-md mb-4"
            />
            <a
              href=""
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download the app
            </a>
          </div>

          {/* Features & How-to Section */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Gesture-based SOS alerts</li>
              <li>Automatic location tracking</li>
              <li>Public CCTV camera integration</li>
              <li>Community Helper network</li>
              <li>Emergency contact list</li>
              <li>Safety tips and resources</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              How to Use the App:
            </h3>
            <ol className="list-decimal list-inside text-gray-600 mb-8">
              <li>Download the app from the App Store or Google Play Store.</li>
              <li>Create an account or log in if you already have one.</li>
              <li>
                Explore the app`s features, such as SOS alerts, location
                tracking, and community connections.
              </li>
              <li>Customize your safety settings and emergency contacts.</li>
              <li>
                Stay informed about safety tips and resources available in the
                app.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPage;
