import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TbMail } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen gap-6 h-dvh flex justify-center flex-col items-center">
      <div className=" absolute top-0 w-[150px] h-[50px] text-center bg-white rounded-b-2xl shadow-md flex justify-center items-center ">
        <p className="font-[800] text-[#0B45D5]">Studio Nexa</p>
      </div>
      {/*icons */}
      <div className="w-[38px] absolute rotate-180 bottom-24 left-14">
        <img src="/holo.webp" alt="" />
      </div>
      <div className=" w-[38px] absolute bottom-20 right-14">
        <img src="/steps.webp" alt="" />
      </div>
      {/* icons end */}

      <div className="w-[73px] h-[73px] mb-3">
        <img src="/likehnad.png" alt="" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-[16px] font-[600] text-[#686975]">WE'RE STILL</p>
        <p className="text-[26px] text-[#0B45D5] font-[800]">
          Cooking Our Website.
        </p>
        <p className="text-[14px] font-[600] text-[#686975] w-[262px] text-center">
          We are going to launch our website Very Soon. Stay Tune.
        </p>
        {/* <p></p> */}
      </div>
      <div className="w-[190px] mt-2 h-[55px] bg-[#171930] rounded-full flex justify-start gap-3  items-center shadow-2xl shadow-black cursor-pointer">
        <div className="ml-3 bg-white rounded-full p-2">
          <TbMail color="#0B45D5" size="22px" />
        </div>
        <div className="">
          <p className="text-[#fff]">Notify Me</p>
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-10 cursor-pointer w-[50px] h-[50px] bg-white rounded-full shadow-2xl shadow-black">
        <FaInstagram color="#686975" size="22px" />
      </div>
    </div>
  );
}

export default App;
