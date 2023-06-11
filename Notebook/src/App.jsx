
import './App.scss'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';
import AddNote from './Components/Addnote/AddNote';
import Note from './Components/Notes/Note';
import UserRoute from './Components/Private Route/UserRoute';
import UserProvider from './Components/Context/UserContext';
import Signin from './Components/Signin/Signin';
import EditNote from './Components/Edit Note/EditNote';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {


  return (
   
    <UserProvider > 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Signup />}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path='editnote' element={<EditNote />}/>
      <Route path="addnote" element={<UserRoute><AddNote /></UserRoute>} />
    <Route path="notes" element={<UserRoute><Note /></UserRoute>}/>
      <Route path='search' element={<SearchBar />}/>
    </Routes>
    </BrowserRouter>
    </UserProvider >
   
  )
}

export default App


