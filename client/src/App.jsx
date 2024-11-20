import { BrowserRouter, Route, Routes } from "react-router-dom";

import { StartSesion } from "./pages/StartSesion";


import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter 
        future={{
        v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" element={<StartSesion></StartSesion>}></Route>
          <Route path="/about" element={<div>aboutW</div>}></Route>

          <Route path="*" element={<h4>Error 404</h4>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
