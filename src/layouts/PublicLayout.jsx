import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SecondaryHeader } from "../components/SecondaryHeader";
import { Footer } from "../components/Footer";

export function PublicLayout() {
  const { id } = useParams();

  return (
    <>
      {id === "home" ? <SecondaryHeader /> : <Header />}
      <main style={{ position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
