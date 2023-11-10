import './index.scss'
import { BiSolidCircle } from "react-icons/bi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className="navbar__btn">
          <Link to={'/'}><IoArrowBackCircleSharp size={40}/></Link>
        </div>
        <div className="navbar__logo">
          <h1>Choose Soccer</h1>
        </div>
        <div className="navbar__status">
          <BiSolidCircle size={10} /><p>Live</p>
        </div>
      </nav>
    </>
  )
}

