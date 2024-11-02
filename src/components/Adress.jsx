import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './styles/Adress.css'

const containerStyle = {
  width: '100%',
  borderRadius: '12px',
}

const center = {
  lat: 10.632481,
  lng: -85.434937,
}

const Address = () => {
  useEffect(() => {
    // Inicializa el mapa una vez que el componente se ha montado
    const map = L.map('map', {
      center: [center.lat, center.lng],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
    })

    // Agrega la capa de tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Agrega un marcador en la ubicación deseada
    L.marker([center.lat, center.lng])
      .addTo(map)
      .bindPopup('Nuestra Ubicación')
      .openPopup()

    // Limpieza para evitar inicializar el mapa más de una vez
    return () => {
      map.remove() // Elimina el mapa al desmontar el componente
    }
  }, [])

  return (
    <>
      <div id="address-home" className="address-wrapper">
        <h1 className="address-title">Nuestra Ubicación</h1>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Hotel+La+Riviera%2C+Liberia%2C+Guanacaste+Province"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f2f2f2"
                height="16px"
                width="16px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            Hotel La Riviera, Liberia, Guanacaste Province
          </p>
        </a>
        <div className="address-container">
          <div id="map" style={containerStyle}></div>
        </div>
      </div>
    </>
  )
}

export default Address
