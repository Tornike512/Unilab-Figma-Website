import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { SecondaryHeader } from "../components/SecondaryHeader";
import { Footer } from "../components/Footer";

export function PublicLayout() {
  return (
    <>
      <SecondaryHeader />
      <main style={{ position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
