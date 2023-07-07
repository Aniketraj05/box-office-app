import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MainLayout from "./components/MainLayout";
import ShowPage from "./pages/ShowPage";
import StarredPage from "./pages/StarredPage";
import { GlobalTheme } from "./theme";

const ourQueryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={ourQueryClient}>
        <GlobalTheme>
          <HashRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/starredpage" element={<StarredPage />} />
              </Route>
              <Route path="/show/:showId" element={<ShowPage />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </HashRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;
