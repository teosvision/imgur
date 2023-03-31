import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/Header";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
