import React from "react";
import { Link } from "react-router-dom";
import dribbleLogo from "../../../public/assets/dribbleLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <section className=" overflow-hidden relative  pt-10 bg-gray-100 ">
      <div className="mx-auto max-w-7xl px-4  ">
        <div className="-m-6 flex justify-center flex-wrap">
          <div className="p-6  w-[280px]">
            <div className="flex h-full flex-col ">
              <div className="mb-1 inline-flex items-center">
                <img className="h-12" src={dribbleLogo} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet elit. Hic ratione minima maxime
                  eligendi voluptas.
                </p>
              </div>
              <div className="flex gap-2 text-gray-600">
                <Link>
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link>
                  <FontAwesomeIcon icon={faDribbble} />
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 ">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-black">
                For designers
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-gray-600" to="/">
                    Go Pro!
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Explore design work
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Design blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Overtime podcast
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Playoffs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Weekly warm-up
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Refer a friend
                  </Link>
                </li>
                <li>
                  <Link className=" text-gray-600" to="/">
                    Code of conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" p-6  ">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-black">
                Hire designers
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-gray-600" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-600" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-gray-600" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" p-6  ">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-black">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Support
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Api
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className=" text-gray-600" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 ">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-black">
                Directories
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className=" text-gray-600" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 ">
            <div className="h-full">
              <h3 className="tracking-px mb-2  text-sm font-semibold  text-black">
                Design Resources
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className=" text-gray-600" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className=" text-gray-600" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mt-6 mx-4 py-5 flex justify-between">
        <p className="text-sm text-gray-600">
          &copy; Copyright 2024. All Rights Reserved.
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-gray-600">
            <span className="text-black font-semibold">20,501,853</span> shots
            dribble
          </p>
          <Link className="text-pink-500">
            <FontAwesomeIcon icon={faDribbble} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
