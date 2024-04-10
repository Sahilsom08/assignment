import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import Button from "./Button";
import { useState ,useEffect} from "react";
import useUserContext from "../context/userContext";

function Signup() {
  const {userData, setUserData} = useUserContext()

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userData.data
});


  const signup = (data) => {
    if (data) {
      setUserData({...userData,data});
      navigate("/welcome");
    }
  };

  return (
    <div className="h-full ">
      <p className="text-right px-2 pt-1 text-sm">Already a member? <Link className="text-blue-700" >Sign in</Link></p>
      <div className="h-[calc(100%-40px)] flex flex-col justify-center items-center">
        <h3 className="mb-5 w-3/4 sm:w-2/5 text-3xl font-bold">
          Sign up to Dribble
        </h3>

        <form
          onSubmit={handleSubmit(signup)}
          className=" w-3/4 sm:w-2/5 space-y-3"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              label={"Name"}
              placeholder={"John"}
              type={"text"}
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />

            <Input
              label={"Username"}
              placeholder={"doe"}
              type={"text"}
              {...register("username", {
                required: true,
                maxLength: 20,
              })}
            />
          </div>
          <Input
            label={"Email"}
            placeholder={"example@email.com"}
            type={"email"}
            {...register("email", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email && <p className="alert">Enter a valid email address</p>}

          <Input
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
          {errors.password && (
            <p className="alert">
              Password must be between 6 to 15 characters in length with at leat
              one uppercase, lowercase letter and number
            </p>
          )}
          <input
            type="checkbox"
            id="terms"
            {...register("terms", {
              required: true,
            })}
          />

          <span className="pl-3  text-sm">
            Creating an account means youre okay with our{" "}
            <Link className="text-blue-700">Terms of Service,</Link>
            <Link className="text-blue-700"> Privacy Policy.</Link> and our
            default
            <Link className="text-blue-700"> Notification Settings.</Link>
          </span>
          <Button type="submit"  className="block">
            Create Account
          </Button>
          <p className="text-xs w-64">
            This site is protected by reCAPCHA and Google
            <Link className="text-blue-700"> Privacy Policy</Link> and
            <Link className="text-blue-700">Terms of Service</Link> apply.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
