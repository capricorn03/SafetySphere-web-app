const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="relative flex-grow flex items-center justify-center bg-contain bg-right"
        style={{ backgroundImage: 'url(/img1_final.jpg)', backgroundSize: 'contain', backgroundPosition: 'center', minHeight: '60vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="relative z-10 text-center px-4 py-8 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let’s take the initiative
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            to create the
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            safer environment
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400">
            for women around us.
          </h1>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-95 hover:shadow-2xl p-4 sm:p-6 m-auto" style={{ marginBottom: "10px", marginTop: "10px", overflow: "hidden", margin: "10px" }}>
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Join the movement
        </h2>
        <p className="text-lg leading-6 mb-4 text-center">
          Together we can build a world where every woman feels safe and empowered.
        </p>
        <p className="text-lg leading-6 mb-4 text-center">
          By registering as a User, You can access Valuable features and connect with a supportive community.
        </p>
        <p className="text-lg leading-6 mb-4 text-center">
          As a Community Helper you can lend a hand and assist others in need.
        </p>
        <p className="text-lg leading-6 mb-4 text-center">
          Or, register as a Combined User to stay safe and make your Sommunity Safer.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-95 hover:shadow-2xl p-4 sm:p-6 m-auto" style={{ marginBottom: "20px", marginTop: "10px", overflow: "hidden", margin: "10px" }}>
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Become a Community Champion
        </h2>
        <p className="text-lg leading-6 mb-4 text-center">
          Support and uplift those around you by offering assistance and resources.
        </p>
        <p className="text-lg leading-6 mb-4 text-center">
          As a Community Champion, you'll play a vital role in creating a safer and more supportive environment for everyone.
        </p>
      </div>


    </div>
  );
};

export default HomePage;
