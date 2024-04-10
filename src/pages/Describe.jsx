import { useNavigate } from "react-router-dom";
import useUserContext from "../context/userContext";
import { useForm } from "react-hook-form";
import dribbleLogo from "../../public/assets/dribbleLogo.svg";
import Button from "../component/Button";
import { useState } from "react";
import Card from "../component/Card";

function Describe() {
  const { userData, setUserData } = useUserContext();
  const cardData = [
    {
      image: "../../public/assets/designer.svg",
      title: "I'm a designer looking to share my work",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, sunt.",
    },
    {
      image: "../../public/assets/hiring.svg",
      title: "I'm looking to hire a designer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, sunt.",
    },
    {
      image: "../../public/assets/inspiration.svg",
      title: "I'm looking for design inspiration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, sunt.",
    },
  ];

  const navigate = useNavigate();


  const handleSubmit = () => {
    navigate("/email");
  };

  return (
    <div className="h-screen">
      <div className="pl-5 pt-5">
        <img className="h-12  " src={dribbleLogo} alt="" />
      </div>
      <div className="welcome-container  flex flex-col items-center  mx-5 ">
        <div className="">
          <div className="welcome-header text-center mt-5  mb-20">
            <h1 className="text-3xl font-bold">What brings you to Dribble?</h1>
            <p className="text-gray-500 text-base py-2">
              Select the option that best describe you. Dont worry, you can
              explore other options later
            </p>
          </div>

          <div className=" flex flex-col md:flex-row gap-16 md:gap-5   ">
            {cardData.map((item, idx) => (
              <Card
                key={idx}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
            {/* <Card /> */}
          </div>
          <div className="my-10 text-center">
            <Button
              // disabled={!isValid}
              type="submit"
              className="border  disabled:opacity-70"
              onClick={handleSubmit}
            >
              Next
            </Button>
            <p className="text-sm text-gray-500 mt-1 pl-7">or Press RETURN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Describe;
