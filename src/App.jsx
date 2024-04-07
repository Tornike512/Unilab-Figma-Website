import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout } from "./layouts/PublicLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
