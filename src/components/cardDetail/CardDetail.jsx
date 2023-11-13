import "./index.scss";
import { useState } from "react";
import { FaLocationDot, FaClock, FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
export default function CardDetail({ partida }) {
  const [isVisible, setIsVisible] = useState(false);

  const [isLikeL, setIsLikeL] = useState(0);
  const [isLikeR, setIsLikeR] = useState(0);
  const [likedLeft, setLikedLeft] = useState(false);
  const [likedRight, setLikedRight] = useState(false);

  const handleCountL = () => {
    if (isLikeL <= 0 && likedLeft === false) {
      setIsLikeL(isLikeL + 1);
      setLikedLeft(true)
      if (likedLeft) {
        setIsLikeL(isLikeL - 1);
        setLikedLeft(false);
      } else {
        setIsLikeL(isLikeL + 1);
        setLikedLeft(true);
      }
      if(likedRight){
         setIsLikeR(isLikeR - 1);
         setLikedRight(false);
      }
    } else {
      if (isLikeL >= 1) {
        setIsLikeL(isLikeL - 1);
        setLikedLeft(false);
      }
    }
  };

  const handleCountR = () => {
    if (isLikeR <= 0 && likedRight === false) {
      setIsLikeR(isLikeR + 1);
      setLikedRight(true)
      if (likedRight) {
        setIsLikeR(isLikeR - 1);
        setLikedRight(false);
      } else {
        setIsLikeR(isLikeR + 1);
        setLikedRight(true);
      }
      if(likedLeft){
        setIsLikeL(isLikeL - 1);
        setLikedLeft(false);
      }
    } else {
      if (isLikeR >= 1) {
        setIsLikeR(isLikeR - 1);
        setLikedRight(false);
      }
    }
  };

  return (
    <div
      className="carddetail"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      {isVisible ? (
        <div>
          <h1>PALPITE AGORA</h1>
        </div>
      ) : (
        <div className="carddetailshow">
          <div className="carddetailshow__info">
            <p>
              <FaClock size={15} />
              {partida.partida_data}
            </p>
            <p>
              <FaLocationDot size={15} />
              {partida.local}
            </p>
          </div>
          <div className="carddetailshow__content">
            <div className="carddetailshowcontent__aside">
              <div className="carddetailshowcontent__aside--left">
                <div className="resultados">
                  <p>Aproveitamento</p>
                  <div className="resultados__aproveitamento">
                    {partida.aproveitamento_mandante.map((aproveitamento) => (
                      <p>{aproveitamento}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="carddetailshowcontent__aside--mid">
                <p>Quem será o vencedor da rodada?</p>
                <div className="likeBtn">
                  <div className="likeBtn__BtnLeft">
                    <p>{isLikeL}</p>
                    <FaThumbsUp
                      onClick={() => handleCountL()}
                      className={`btnLikeL ${likedLeft ? "liked" : ""}`}
                      size={22}
                    />
                  </div>
                  <div className="likeBtn__BtnRight">
                    <p>{isLikeR}</p>
                    <FaThumbsDown
                      onClick={() => handleCountR()}
                      className={`btnLikeR${likedRight ? "liked" : ""}`}
                      size={22}
                    />
                  </div>
                </div>
              </div>
              <div className="carddetailshowcontent__aside--right">
                <div className="resultados">
                  <p>Aproveitamento</p>
                  <div className="resultados__aproveitamento">
                    {partida.aproveitamento_visitante.map((aproveitamento) => (
                      <p>{aproveitamento}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// {!isVisible ? (<CardDetail />) : <CardDetailShow partida={partida} clubes={data.clubes} />}
