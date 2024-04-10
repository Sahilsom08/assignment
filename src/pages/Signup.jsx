import sideImg from "../../public/assets/sideImg.jpg";
import Signupcomp from "../component/Signup";
function Signup() {
  return (
    <div className="flex   h-screen">
      <div className="hidden lg:block lg:w-[30%]">
        <img className="h-full " src={sideImg} alt="image" />
      </div>
      <div className="w-full lg:w-[calc(100%-30%)] ">
        <Signupcomp />
      </div>
    </div>

  );
}

export default Signup;
