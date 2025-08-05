import React from "react";

import { FaCheckCircle } from "react-icons/fa";
<FaCheckCircle />;

function Hero(props) {
  const { data } = props;
  return (
    <div className="flex flex-col gap-5 mt-5 mx-10 md:flex-row md:mt-20">
      <div className="flex  flex-1 flex-col gap-5 justify-center">
        <div>
          <p className="text-4xl font-bold md:text-6xl">{data.title}</p>
          <p>{data.description}</p>
        </div>
        <button>
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
