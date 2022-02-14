//Dependencies
import { Routes, Route } from "react-router-dom"
//Components
// import NavBar from './Components/NavBar'

import Home from "."


function App() {
  return (
    <>
      {/* <NavBar /> */}
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
