import "./index.scss";
import CardJogo from "../../components/cardJogo/CardJogo";
import NavBar from "../../components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <div className="bghome">
        <NavBar />
        <div className="home">
          <CardJogo />
        </div>
      </div>
    </>
  );
}
