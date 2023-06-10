import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import Signin from '../Signin/Signin'


function UserRoute({children}) {

    const {loggedinUser}=useContext(UserContext)
  return (
   <>
{
    loggedinUser ? children : <Signin />
}

   </>
  )
}

export default UserRoute