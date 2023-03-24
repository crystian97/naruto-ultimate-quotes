import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-full flex h-screen bg-gradient-to-t from-neutral-800 to-orange-600 py-16 px-20">
      <div className="flex flex-col justify-between mr-64">
        <img src="./naruto-ultimate-quotes-logo.png" alt="" />
        <Link
          to="/"
          className="border-orange-400 w-96 h-20 bg-white text-3xl text-orange-400 flex justify-center items-center border-solid border-4"
        >
          BACK
        </Link>
      </div>
      <div className="mt-36 bg-yellow-800	w-2/5 h-auto flex flex-col  justify-start items-center pt-12">
        <h1 className="text-yellow-300 text-3xl mb-10">Ninja Select</h1>
        <div className="flex flex-row flex-wrap justify-between items-center w-96 gap-x-1 gap-y-7 ">
          <Link
            to="/quote/naruto"
            className="w-24 h-24 bg-[url('./naruto.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/sasuke"
            className="w-24 h-24 bg-[url('./sasuke.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/sakura"
            className="w-24 h-24 bg-[url('./sakura.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/kakashi"
            className="w-24 h-24 bg-[url('./kakashi.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/iruka"
            className="w-24 h-24 bg-[url('./iruka.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/neji"
            className="w-24 h-24 bg-[url('./neji.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/gaara"
            className="w-24 h-24 bg-[url('./gaara.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/rock-lee"
            className="w-24 h-24 bg-[url('./rock-lee.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/itachi-uchiha"
            className="w-24 h-24 bg-[url('./itachi-uchiha.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/gamabunta"
            className="w-24 h-24 bg-[url('./gamabunta.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/hinata"
            className="w-24 h-24 bg-[url('./hinata.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
          <Link
            to="/quote/choji"
            className="w-24 h-24 bg-[url('./choji.png')] bg-cover bg-top rounded transition duration-200  border-orange-400	border-1 bg-white hover:bg-orange-400 ease-in "
          ></Link>
        </div>
      </div>
    </div>
  );
}
