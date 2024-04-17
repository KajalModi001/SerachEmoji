import { BrowserRouter, Route, Routes } from "react-router-dom";
import Searchemoji from "./Pages/Searchemoji";


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Searchemoji/>}></Route> 

        </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
