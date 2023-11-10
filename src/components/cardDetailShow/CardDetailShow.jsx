import './index.scss'
import { FaLocationDot, FaClock } from "react-icons/fa6";

export default function CardDetailShow() {
  return (
    <>
      <div className="carddetailshow">
        <div className="carddetailshow__info">
          <p><FaClock size={15} /> 00:00</p>
          <p><FaLocationDot size={15} /> arena pernambuco</p>
        </div>
        <div className="carddetailshow__content">
          
        </div>
      </div>
    </>
  )
}