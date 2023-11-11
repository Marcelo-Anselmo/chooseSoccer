import './index.scss'
import { useEffect, useState } from 'react';

import CardDetail from '../cardDetail/CardDetail';
import CardDetailShow from '../cardDetailShow/CardDetailShow';
import useFetch from '../../hooks/useFetch';

export default function CardJogo() {
  const [isVisible, setIsVisible] = useState(false);

  const { data, isFetching } = useFetch(
    "https://choose-soccer-backend.vercel.app/"
  );

  const renderContent = () => {
    if (isFetching) {
      return <p>CARREGANDO..</p>;
    } else if (data) {
      return (
        <>
          <h1>Jogos da rodada {data.rodada}</h1>
          <p>{data.clubes[262].abreviacao}</p>
          <div
            className="cardgeral"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            <section className="cardjogo">{/* Seu código existente */}</section>
            <section className="cardinfo">
              {!isVisible ? <CardDetail /> : <CardDetailShow />}
            </section>
          </div>
        </>
      );
    } else {
      return null; // Lidar com o caso em que o `data` ainda não está disponível
    }
  };

  return (
    <div style={{ backgroundColor: "aliceblue", padding: "1rem" }}>
      {renderContent()}
    </div>
  );
}
