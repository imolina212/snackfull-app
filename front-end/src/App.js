//Dependencies
import { Routes, Route } from "react-router-dom"
//Components
import NavBar from './Components/NavBar'

//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import New from "./Pages/New"
import Edit from "./Pages/Edit"
import Reload from "./Pages/Reload"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/snacks" element={<Index />}/>
        <Route path="/snacks/:id" element={<Show />}/>
        <Route path="/snacks/new" element={<New />}/>
        <Route path="/snacks/:id/edit" element={<Edit />}/>
        <Route path="*" element={<Reload />}/>
      </Routes>
    </>
    
  );
}

export default App;
