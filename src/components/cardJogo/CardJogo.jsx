import './index.scss'
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import CardDetail from '../cardDetail/CardDetail';
import CardDetailShow from '../cardDetailShow/CardDetailShow';

export default function CardJogo() {
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    const response = await axios.get('https://choose-soccer-backend.vercel.app/')
    setData(response.data)
  }, [])
  
  useEffect(() => {
    fetchData()
  }, [fetchData])
  
  console.log(data)

  return (
    <>
      <div className='cardgeral' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
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