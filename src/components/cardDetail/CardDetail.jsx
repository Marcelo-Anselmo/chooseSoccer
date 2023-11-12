import "./index.scss";
import { useState } from "react";
import { FaLocationDot, FaClock, FaThumbsUp } from "react-icons/fa6";
// import { BiLike } from 'react-icons/bi'; “react-icons/bi”;
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
      {!isVisible ? (
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
                  <p>aproveitamento</p>
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
                  <div className="__BtnLeft">
                    <FaThumbsUp
                      onClick={() => handleCountL()}
                      className={`__likeBtnLeft ${likedLeft ? "liked" : ""}`}
                      size={30}
                    />
                    <p>{isLikeL}</p>
                  </div>
                  <div className="__BtnRight">
                    <FaThumbsUp
                      onClick={() => handleCountR()}
                      className={`__likeBtnLeft ${likedRight ? "liked" : ""}`}
                      size={30}
                    />
                    <p>{isLikeR}</p>
                  </div>
                </div>
              </div>
              <div className="carddetailshowcontent__aside--right">
                <div className="resultados">
                  <p>aproveitamento</p>
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
