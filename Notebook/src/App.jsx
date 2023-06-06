
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Components/Signup/Signup';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Signup}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
