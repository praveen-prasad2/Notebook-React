import React, { createContext, useEffect } from "react";
import { useState } from "react";
export const UserContext = createContext(); 



const UserProvider = ({ children }) => {
    const [loggedinUser, SetloggedinUser] = useState();


    useEffect(()=>{
      let user=JSON.parse(localStorage.getItem("loggedinuser"))
      console.log("from local storage",user);
      SetloggedinUser(user)
    },[])

    return (
      <UserContext.Provider value={{loggedinUser,SetloggedinUser}}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserProvider