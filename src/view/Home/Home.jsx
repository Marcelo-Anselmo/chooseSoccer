import './index.scss';
import CardJogo from '../../components/cardJogo/CardJogo';
import NavBar from '../../components/navBar/Navbar';

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