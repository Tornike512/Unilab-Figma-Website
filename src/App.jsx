import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout } from "./layouts/PublicLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/authorization" element={<AuthorizationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
