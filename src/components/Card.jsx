import React from "react";
import icon from "../assets/free.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Card({ data }) {
  return (
    <div className="flex justify-around mt-5">
      {data.map((el) => {
        return (
          <div className=" flex flex-col w-80  items-center border-2 rounded-2xl border-amber-500 ">
            <div className="mt-24">
              <div className="flex flex-col items-center">
                <img src={icon} alt="" />
                <p className="mt-5 font-bold">{el.plan}</p>
              </div>
              <div className="mt-5">
                {el.features.map((feat) => {
                  return (
                    <div className="flex gap-2 items-center">
                    <IoMdCheckmarkCircle />  <li className="list-none leading-10">{feat}</li>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-center mt-5">
                <p className="font-bold">{Number(el.price)?`$${el.price}/month`:el.price}</p>
                <button className="text-[#F53838] border-2 border-[#F53838] py-2 px-10 font-bold cursor-pointer  mt-5 rounded-3xl hover:bg-[#F53838] hover:text-white">Select</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
