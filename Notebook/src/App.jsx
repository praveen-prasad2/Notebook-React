
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Signup}/>
      <Route path='/signin' Component={Signin}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
