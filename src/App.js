import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import MainLayout from "./components/MainLayout";
import ShowPage from "./pages/ShowPage";

const ourQueryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={ourQueryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/show/:showId" element={<ShowPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
