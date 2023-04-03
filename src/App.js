import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Header";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import File from "./components/file/File";
import Pagination from "./components/pagination/Pagination";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Pagination />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
