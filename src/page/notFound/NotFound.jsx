import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-10">
        The Page You Requested Could Not Be Found
      </h1>

      {/* Illustration */}
      <div className="relative">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 illustration"
          className="w-[320px] md:w-[420px]"
        />
      </div>

      {/* Description */}
      <p className="text-indigo-900/80 mt-6 max-w-md text-sm md:text-base">
        We searched high and low but couldn’t find what you’re looking for.
        Let’s find a better place for you to go.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-semibold shadow-lg transition"
      >
        GO TO HOMEPAGE
      </Link>

      {/* Footer */}
      <p className="text-xs mt-6 text-indigo-900/60">
        Image style inspired UI
      </p>

    </div>
  );
};

export default NotFound;