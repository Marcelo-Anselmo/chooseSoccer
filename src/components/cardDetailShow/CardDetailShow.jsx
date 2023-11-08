import './index.scss'
import { FaLocationDot, FaClock, FaTrophy } from "react-icons/fa6";

export default function CardDetailShow() {
  return (
    <>
      <div className="carddetailshow">
        <div className="carddetailshow__info">
          <p><FaTrophy size={15} /> Nome da liga e gigantesca</p>
          <p><FaClock size={15} /> 00:00</p>
          <p><FaLocationDot size={15} /> Stadium aksdals de abreu</p>
        </div>
        <div className="carddetailshow__content">
          
        </div>
      </div>
    </>
  )
}