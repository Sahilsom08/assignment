import { createContext, useState,useContext } from "react";
const userContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  
  

  const [previewUrl, setPreviewUrl] = useState(null);
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } 
    else {
      setPreviewUrl(null); 
    }
  };


  return (
    <userContext.Provider value={{ userData, setUserData ,previewUrl, setPreviewUrl: handleChange }}>
      {children}
    </userContext.Provider>
  );
};

export default function useUserContext(){
    return useContext(userContext)
};
