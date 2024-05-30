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
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<SignInPage />} />
            <Route path="/:id" element={<RegisterPage />} />
            <Route path="/:id" element={<BookFlightPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
