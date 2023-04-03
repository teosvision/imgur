import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Header from "./components/header/Header";
import MainLayout from "./layouts/MainLayout";
import "./components/pagination/Pagination.scss";
import "./App.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </div>
    </BrowserRouter>
  );
};

export default App;
