import { useForm } from "react-hook-form";
import Button from "../component/Button";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../context/userContext";
import dribbleLogo from "../../public/assets/dribbleLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Welcome() {
  const { userData, setUserData, previewUrl, setPreviewUrl } = useUserContext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: userData.dataTwo,
  });

  const signup = (dataTwo) => {
    if (dataTwo) {
      setUserData({ ...userData, dataTwo });
      navigate("/describe");
    }
  };

  function handleChange(e) {
    setPreviewUrl(e);
  }

  return (
    <div className="h-screen">
      <div className="pl-5 pt-5">
        <img className="h-12  " src={dribbleLogo} alt="" />
      </div>
      <div className="welcome-container flex flex-col items-center  mx-5 ">
        <div className="">
          <div className="welcome-header   my-5">
            <h1 className="text-3xl font-bold">
              Welcome! Let's create your profile
            </h1>
            <p className="text-gray-500 text-base py-2">
              Let others get to know you better! You can do these later
            </p>
          </div>
          <form onSubmit={handleSubmit(signup)}>
            <div className="flex gap-10 items-center  mb-10 ">
              <div className="flex flex-col">
                <p className="font-bold mb-4 text-lg">Add an avatar</p>
                <div
                  className={`flex items-center justify-center h-[130px] w-[130px]
                  ${
                    previewUrl
                      ? "border-none"
                      : "border-2  rounded-full border-gray-500 border-dashed"
                  }
                    `}
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      className="rounded-full w-full h-full"
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="text-gray-500 text-2xl"
                      icon={faCamera}
                    />
                  )}
                </div>
              </div>
              <div>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                  required
                />
                <div>
                  <label
                    htmlFor="avatar"
                    className="text-sm font-semibold border border-gray-300 py-1 px-2 rounded-md cursor-pointer"
                  >
                    Choose image
                  </label>

                  <p className="text-sm text-gray-500 mt-3">
                    <FontAwesomeIcon className="pr-2" icon={faChevronRight} />
                    Or choose one of our defaults
                  </p>
                </div>
              </div>
            </div>

            <div className="form-group flex flex-col ">
              <label htmlFor="location" className="font-bold text-lg">
                Add your location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter a location"
                className=" border-b border-gray-300 outline-none font-semibold my-2 capitalize"
                {...register("location", {
                  required: true,
                })}
              />
            </div>
            <Button
              disabled={!isValid}
              type="submit"
              className="border mt-10 disabled:opacity-70"
            >
              Next
            </Button>
            <p className="text-sm text-gray-500 mt-1 pl-7">or Press RETURN</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
