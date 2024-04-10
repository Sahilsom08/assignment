import React, { useState } from "react";
import check from '../../public/assets/checkbox-circle-fill.svg'

const Card = ({ image, title, description }) => {
  const [showText, setShowText] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowText(!showText);
  };
  return (
    <div
      className={`bg-white relative  rounded-lg   max-w-[230px] w-[250px]  h-[230px] p-2 mx-auto flex flex-col items-center border ${
        showText ? "border-pink-500 " : "border-gray-400"
      } `}
    >
      {/* Card image with animation class */}
      <div
        className={`  ${
          showText ? "translate-y-[-60px]" : ""
        } relative flex flex-col items-center justify-center text-center transition duration-300  `}
      >
        <img
          className={` object-cover border w-40 rounded-lg`}
          src={image}
          alt="Card image"
        />
        <div className="mt-3 ">
          {/* Card title */}
          <h5 className="text-lg font-bold w-full ">{title}</h5>
          {/* Card description (hidden initially) */}
          {showText && (
            <p className="text-gray-700 text-sm w-full ">{description}</p>
          )}
        </div>
      </div>
      
      {/* {
        showText ? <img className="absolute bottom-2 h-5" src={check} onClick={handleClick} /> : <button
        onClick={handleClick}
        className="absolute bottom-2 border border-gray-400 p-2 rounded-full text-white font-bold"
      ></button>
      } */}
     <div onClick={handleClick} className={`absolute bottom-2  ${showText ? '' : 'border p-2 border-gray-400'} rounded-full `}>
      {
        showText ? <img className="h-5" src={check}  /> : ''
      }
     </div>
    </div>
  );
};

export default Card;
