import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <section>
        <h1>Choose Soccer</h1>
        <p>Onde seu palpite é valioso</p>
        <Link to={'./Home'}>Iniciar</Link>
      </section>
    </>
  )
}

export default App;
