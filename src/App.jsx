import "./App.css";
import { Outlet } from "react-router-dom";
import {UserContextProvider} from './context/userContext'

function App() {
  return (
    <>  
      // navbar
        <Outlet />
      //footer
    </>
  );
}

export default App;
