import './index.scss';
import CardJogo from '../../components/cardJogo/CardJogo';
import NavBar from '../../components/navBar/Navbar';
import FetchData from '../../components/fetchData/FetchData';

export default function Home() {
  return (
    <>
      <div className="bghome">
        <NavBar />
        <FetchData />
        <div className="home">
          <CardJogo />
          <CardJogo />
          <CardJogo />
        </div>
      </div>
    </>
  );
}