import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { SecondaryHeader } from "../components/SecondaryHeader";
import { Footer } from "../components/Footer";

export function PublicLayout() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/signin" ||
      location.pathname === "/register" ||
      location.pathname === "/bookflight" ? (
        <SecondaryHeader />
      ) : (
        <Header />
      )}
      <main style={{ position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
