import './index.scss'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <section className='app'>
        <h1>Choose Soccer</h1>
        <p>Onde seu palpite é valioso</p>
        <Link to={'./Home'}>Iniciar</Link>
      </section>
    </>
  )
}
