import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faSearch,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import dribbleLogo from "../../../public/assets/dribbleLogo.svg";
import sideImg from "../../../public/assets/sideImg.jpg";
import img from '../../../public/assets/designer.svg';
const Header = ({avatar}) => {
  
  let Links = [
    { name: "Inspiration", link: "/" },
    { name: "Find Work", link: "/" },
    { name: "Learn Design", link: "/" },
    { name: "Go Pro", link: "/" },
    { name: "Hire Designers", link: "/" },
  ];
  
  let [open, setOpen] = useState(false);

  return (
    <div className="md:border-b  w-full fixed top-0 left-0">
      <div className="md:flex items-center  bg-white py-2 md:px-10 px-7">
        {/* logo section */}
        <div className="  cursor-pointer ">
          <img className="h-11" src={dribbleLogo} alt="logo" />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute  text-xl right-8 top-4 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {/* linke items */}
        <ul
          className={` shadow-md md:shadow-none md:flex md:items-center md:justify-between  md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full  md:w-full md:pl-0 pl-9 md:pt-0 pt-1 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <div className="flex flex-col md:flex-row ">
            {Links.map((link, idx) => (
              <li className="md:ml-4 md:my-0 my-2 font-semibold" key={idx}>
                <a
                  href={link.link}
                  className="text-gray-500 hover:text-pink-500 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </div>
          <div className="flex md:flex-row gap-3 md:items-center ">
            <span className="bg-gray-200 rounded-md py-1 px-1 w-[104px]">
              <button>
                <FontAwesomeIcon
                  className="text-gray-400  text-sm "
                  icon={faSearch}
                />
              </button>
              <input
                type="text"
                name=""
                id=""
                placeholder="search..."
                className="bg-transparent  pl-1 rounded-md w-20 outline-none "
              />
            </span>
            <span className=" pt-1 text-gray-400">
              <FontAwesomeIcon icon={faBusinessTime} />
            </span>
            <span className="rounded-full w-8 h-8  ">
              <img src={avatar} alt=""  className="w-full h-full rounded-full" />
            </span>
            <Button className="w-24 rounded-md">Upload</Button>
          </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
