import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PublicLayout() {
  return (
    <>
      <Header />
      <main style={{ position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
