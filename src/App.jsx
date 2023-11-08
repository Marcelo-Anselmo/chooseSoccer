import './index.scss'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <section className='app'>
        <div className='app__filter'>
          <h1>Choose Soccer</h1>
          <p>Onde seu palpite é valioso</p>
          <Link to={'/Home'}><button>Iniciar</button></Link>
        </div>
      </section>
    </>
  )
}
