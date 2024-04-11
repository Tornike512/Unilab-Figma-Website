import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PublicLayout } from "./layouts/PublicLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const BookFlightPage = lazy(() => import("./pages/BookFlightPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/bookflight" element={<BookFlightPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
