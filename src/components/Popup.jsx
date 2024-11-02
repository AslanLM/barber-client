import { useState } from "react"
import './styles/Popup.css'

export const PopupServices = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null

  const handleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className="popup active">
      <div className="popup-content">
        <ul>
          {service.map((item, index) => (
            <li key={item.id || index}>
              <div className="item-content">
                <img src="/logo.png" alt="logo pop-up" />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <div className="item-extrainfo">
                    <p>
                      <span>{item.duration}</span>
                      <span>{item.details}</span>
                      <span>{item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  height="24"
                  width="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn-popup" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#F2F2F2"
            height="18"
            width="18"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const PopupHero = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className="popup active">
      <div className="popup-content">
        <div className="hero-politics">
          <h2>Nuestra política de reservas</h2>
          <p>25 metros al ESTE del Hotel La Riviera.</p>
          <p>
            Contamos con parqueo privado y amplias y modernas instalaciones para
            el disfrute de ustedes.
          </p>
          <p className="cancel-date">
            <span>Política de cancelación:</span> Puede cancelar o reprogramar
            hasta 1 hora antes de la hora de la cita.
          </p>
          <button className="hero-btn-date" onClick={handleClose}>
            De Acuerdo
          </button>
        </div>
      </div>
    </div>
  )
}

export const PopupServicesButton = ({ servicesSet, children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedService, setSelectedService] = useState([])

  const openPopup = (service) => {
    setSelectedService(service)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }
  return (
    <>
      <div className="services-pop" onClick={() => openPopup(servicesSet)}>
      {children}

      <PopupServices
        isOpen={isPopupOpen}
        onClose={closePopup}
        service={selectedService}
      />
      </div>
    </>
  )
}


export const PopupHeroButton = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return(
    <>
    <div className="hero-pop" onClick={() => openPopup()}>
      {children}
    </div>
    <PopupHero isOpen={isPopupOpen} onClose={closePopup} />
    </>
  )
}
