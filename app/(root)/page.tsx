const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {' '}
        {/* Added max-w-screen-xl */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">
            Let’s take the initiative
          </h1>
          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            to create the
          </h1>
          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            safer environment
          </h1>
          <h1 className="text-4xl font-bold text-orange-600 mt-2">
            for women around us.
          </h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Join the Movement
          </h2>
          <p className="text-lg mb-4">
            Together, we can build a world where every woman feels safe and
            empowered.
          </p>
          <p className="text-lg mb-4">
            By registering as a User, you can access valuable safety features
            and connect with a supportive community.
          </p>
          <p className="text-lg mb-8">
            As a Community Helper, you can lend a hand and assist others in
            need.
          </p>
          <p className="text-lg mb-8">
            Or, register as a combined user to stay safe and make your community
            safer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
