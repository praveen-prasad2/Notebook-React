
import './App.scss'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';
import AddNote from './Components/Addnote/AddNote';
import Note from './Components/Notes/Note';
import UserRoute from './Components/Private Route/UserRoute';
import UserProvider from './Components/Context/UserContext';
import Signin from './Components/Signin/Signin';

function App() {


  return (
   
    <UserProvider > 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Signup />}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path="addnote" element={<UserRoute><AddNote /></UserRoute>} />
    <Route path="notes" element={<UserRoute><Note /></UserRoute>}/>
    </Routes>
    </BrowserRouter>
    </UserProvider >
   
  )
}

export default App


