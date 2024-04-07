import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout } from "./layouts/PublicLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/:id" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
