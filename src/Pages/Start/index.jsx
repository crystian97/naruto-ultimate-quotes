import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="bg-gray-800 h-screen flex flex-row justify-center py-8 pr-32 w-full">
      <div className="flex flex-col gap-2 mr-64">
        <img src="./naruto-ultimate-quotes-logo.png" alt="" />
        <img src="./chars.png" alt="" />
      </div>
      <div className="flex flex-col align-middle justify-center">
        <Link
          to="/home"
          className="border-orange-400 w-96 h-20 bg-white text-3xl text-orange-400 flex justify-center items-center border-solid border-4 hover:animate-pulse"
        >
          Start
        </Link>
      </div>
    </div>
  );
}
