import { Link, Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {

  const {search,pathName}=useLocation();
  console.log(search,pathName);
  return (
    
    <div className="h-screen w-screen flex">
     
     {(pathName!="/" && search.length>0) &&(<Link className="absolute left-[17%] top-[3%] rounded text-white bg-red-300 p-1 hover: hover:bg-red-400 hover:font-semibold" to="/">Home </Link>)}




    
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
