import Signup from "./Signup";
import { Outlet } from "react-router-dom";
import Welcome from "./Welcome.jsx";
import Describe from "./Describe.jsx";
import {UserContextProvider} from '../context/userContext.jsx'

function Form() {
  return (
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
  );
}

export default Form;
