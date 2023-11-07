import './index.scss'

export default function CardJogo() {
  return (
    <>
      <div className='cardgeral'>
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
          <h1>PALPITE AGORA</h1>
        </section>
      </div>
    </>
  )
}