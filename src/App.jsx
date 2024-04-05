import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout } from "./layouts/PublicLayout";
import { Header } from "./components/Header";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Router>
      <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PublicLayout />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
