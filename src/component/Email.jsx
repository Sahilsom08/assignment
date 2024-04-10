import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
const Email = ({ email }) => {
  return (
    <div className=" p-10 mt-16 ">
      <div className="max-w-7xl mx-auto text-center  md:w-1/2">
        <h1 className="text-3xl font-bold">
          Please verify your email...
        </h1>
        <FontAwesomeIcon className="text-neutral-400 h-20 my-2" icon={faEnvelopeCircleCheck} />
        <p className="text-gray-600 leading-relaxed">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="mt-3"><Link className="text-gray-800 font-medium ">{email}</Link></p>
        <p className="text-gray-600 leading-relaxed my-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <div className="flex justify-center items-center">
          <span className="text-gray-600 mx-4">
            Didn't receive the email? Check your Spam folder, it may hav been
            caught by a filter. If you still don't see it, you can
            <Link className="text-pink-500"> resend confirmation email</Link>
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4">
          Wrong email address? <Link className="text-pink-500 ">Change it</Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Email;
