import './index.scss';
import { useState } from 'react';
import { FaLocationDot, FaClock } from "react-icons/fa6";

export default function CardDetail({ partida }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='carddetail' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {!isVisible ? (
        <div>
          <h1>PALPITE AGORA</h1>
        </div>
      ) : (
        <div className='carddetailshow'>
          <div className='carddetailshow__info'>
            <p><FaClock size={15} />{partida.partida_data}</p>
            <p><FaLocationDot size={15} />{partida.local}</p>
          </div>
          <div className='carddetailshow__content'>
            <div className="carddetailshowcontent__aside">
              <div className="carddetailshowcontent__aside--left">
                <div className='resultados'>
                  <p>aproveitamento</p>
                  <div className='resultados__aproveitamento'>
                    {
                      partida.aproveitamento_mandante.map((aproveitamento) => (

                        <p>{aproveitamento}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="carddetailshowcontent__aside--mid">
                <p>Quem será o vencedor da rodada?</p>
              </div>
              <div className="carddetailshowcontent__aside--right">
              <div className='resultados'>
                  <p>aproveitamento</p>
                  <div className='resultados__aproveitamento'>
                    {
                      partida.aproveitamento_visitante.map((aproveitamento) => (

                        <p>{aproveitamento}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}







// {!isVisible ? (<CardDetail />) : <CardDetailShow partida={partida} clubes={data.clubes} />}