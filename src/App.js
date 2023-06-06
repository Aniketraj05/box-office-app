import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import MainLayout from "./components/MainLayout";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route path="/show/:showId" element={<ShowPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
