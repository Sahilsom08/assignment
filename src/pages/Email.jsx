import React from 'react'
import useUserContext from "../context/userContext";
import EmailComp from '../component/Email';
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer';
function Email() {
  const { userData,previewUrl } = useUserContext();

  return (
    <div  >
        <Header avatar={previewUrl} />
        <EmailComp email={userData.data && userData.data['email']} />
        <Footer />
    </div>
  )
}

export default Email

{/* <h1>{userData.data && userData.data['email']}</h1> */}
{/* <img className='border h-32 w-32' src={previewUrl} alt="" srcset="" /> */}