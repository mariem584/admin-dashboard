import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SinglePage from "./pages/singlePage/SinglePage";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss'

import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkMode";
import { useContext } from "react";

function App() {
const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              </Route>
          

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<SinglePage />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
