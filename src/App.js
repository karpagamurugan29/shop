import React from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route  path="/" Component={Home}/>
           <Route  path="/product" Component={Product}/>
         </Routes>
      </BrowserRouter>
    
      {/* home */}
    </div>
  );
}

export default App;
