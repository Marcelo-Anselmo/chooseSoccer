import './index.scss'

import CardDetail from '../cardDetail/CardDetail'
import useFetch from '../../hooks/useFetch'

export default function CardJogo() {

  const { data, isFetching } = useFetch(
    "https://choose-soccer-backend.vercel.app/"
  )

  const renderContent = () => {
    if (isFetching) {
      return <span>CARREGANDO..</span>
    } else if (data) {
      return Object.values(data.partidas).map(partida => {
        const clubeCasa = data.clubes[partida.clube_casa_id];
        const clubeVisitante = data.clubes[partida.clube_visitante_id];
        return (
          <>
            <div className='cardgeral'>
              <section className="cardjogo">
                <div className="cardjogo__aside cardjogo__asideleft">
                  <p>{clubeCasa.abreviacao}</p>
                  <h2>{clubeCasa.nome}</h2>
                  <img src={clubeCasa.escudos['60x60']} alt="" />
                </div>
                <div className="cardjogo__aside cardjogo__asideright">
                  <p>{clubeVisitante.abreviacao}</p>
                  <h2>{clubeVisitante.nome}</h2>
                  <img src={clubeVisitante.escudos['60x60']} alt="" />
                </div>
                <div className='placarflutuante'>{partida.placar_oficial_mandante} x {partida.placar_oficial_visitante}</div>
              </section>
              <section className='cardinfo'>
                <CardDetail partida={partida}/>
              </section>
            </div>
          </>
        )
      })
    } else {
      return null
    }
  }

  return (
    <>
      {renderContent()}
    </>
  )
}