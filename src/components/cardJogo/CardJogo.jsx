import './index.scss'
import { useState } from 'react';
import CardDetail from '../cardDetail/CardDetail';
import CardDetailShow from '../cardDetailShow/CardDetailShow';

export default function CardJogo() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      <div className='cardgeral' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <section className="cardjogo">
          <div className="cardjogo__aside cardjogo__asideleft">
            <h2>roma</h2>
            <img src="time01.svg" alt="" />
          </div>
          <div className="cardjogo__aside cardjogo__asideright">
            <h2>manchester city</h2>
            <img src="time02.svg" alt="" />
          </div>
          <div className='placarflutuante'>1 x 9</div>
        </section>
        <section className='cardinfo'>
          {!isVisible ? (
            <CardDetail/>
          ) :  <CardDetailShow/>}
        </section>
      </div>
    </>
  )
}