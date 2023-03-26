import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import IndividualProduct from "./Components/IndividualProduct";
import Main from "./Components/Main";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/product/:id' element={<IndividualProduct />}></Route>
      </Routes>
    </BrowserRouter>
    <IndividualProduct />
    </div>
  );
}

export default App;
