import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../libs/axios";

export default function Quote() {
  const { char } = useParams();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  async function getData() {
    await api
      .get("", {
        params: {
          name: char,
        },
      })
      .then((response) => {
        setAuthor(response.data.character);
        setQuote(response.data.quote);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="max-w-full flex h-screen py-16 px-20 bg-[#65622C]	 ">
      <div className="flex flex-col justify-between mr-64">
        <img src="../naruto-ultimate-quotes-logo.png" alt="" />
        <Link
          to="/home"
          className="border-orange-400 w-96 h-20 bg-white text-3xl text-orange-400 flex justify-center items-center border-solid border-4"
        >
          BACK
        </Link>
      </div>
      <div className="flex flex-col items-center mt-36 gap-1 ">
        <img src={`../${char}.png`} className="w-fit h-96  " alt="" />
        <div className="bg-[#9B590D] items-end flex flex-col p-11 w-4/5 border-l-4 border-b-4 border-[#E6590F]">
          <p className="text-lg">{quote}</p>
          <small className="justify-self-end text-[#1E1E1E] ">{author}</small>
        </div>
      </div>
    </div>
  );
}
