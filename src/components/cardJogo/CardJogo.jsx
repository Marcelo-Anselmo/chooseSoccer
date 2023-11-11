import './index.scss'
import { useEffect, useState } from 'react';

import CardDetail from '../cardDetail/CardDetail';
import CardDetailShow from '../cardDetailShow/CardDetailShow';
import useFetch from '../../hooks/useFetch';

export default function CardJogo() {
  const [isVisible, setIsVisible] = useState(false)

  const { data, isFetching } = useFetch('https://choose-soccer-backend.vercel.app/')

  return (
    <>
      <div style={{ backgroundColor: "aliceblue", padding: "1rem" }}>
        <h1>Jogos da rodada {data.rodada}</h1>
        {isFetching && <p>CARREGANDO..</p>}
      </div>
      <div
        className="cardgeral"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>
        <section className="cardjogo">
          <div className="cardjogo__aside cardjogo__asideleft">
            <p>RMA</p>
            <h2>Universidad Catolica do Chile escambau</h2>
            <img src="time01.svg" alt="" />
          </div>
          <div className="cardjogo__aside cardjogo__asideright">
            <p>CITY</p>
            <h2>manchester city</h2>
            <img src="time02.svg" alt="" />
          </div>
          <div className="placarflutuante">1 x 9</div>
        </section>
        <section className="cardinfo">
          {!isVisible ? <CardDetail /> : <CardDetailShow />}
        </section>
      </div>
    </>
  );
}

