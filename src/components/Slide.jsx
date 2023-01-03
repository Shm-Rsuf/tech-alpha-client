import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts container mx-auto flex flex-col justify-center items-start h-full gap-3 text-violet-50">
        <h1 className="space-font text-6xl text-violet-50 uppercase w-3/5">
          {image.headline}
        </h1>
        <p className="text-lg w-2/5 text-violet-50/75 font-semibold">
          {image.detail}
        </p>
        <Link
          to={`/products/${image.category}`}
          className="slide-btn uppercase h-14 w-72 border border-violet-50 py-2 px-4 duration-500 hover:text-orange-50 mt-5"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
