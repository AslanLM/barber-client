import { Swiper, SwiperSlide } from 'swiper/react'
import './styles/Barbers.css'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'

const Barbers = () => {
  return (
    <div className="barbers">
      <div className="barber-header">
        <h1 className="barber-title">Nuestros Barberos</h1>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        slidesPerView={4}
        breakpoints={{
          1124: {
            slidesPerView: 4,
          },
          867: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="barber-swiper"
      >
        {barbersData.map((barber, index) => (
          <SwiperSlide key={index}>
            <div className="barber-wrapper">
              <a href='/servicios' className="barber-card">
                <div className="barber-container">
                  <div className="barber-logo">
                    <img src="/logo.png" alt="logo" />
                  </div>
                  <div className="barber-info">
                    <h2>
                      {barber.firstName} <br /> {barber.lastName}{' '}
                    </h2>
                    <p>{barber.description}</p>
                  </div>
                </div>
                <div className="img-container">
                  <img src={barber.img} alt={barber.name} />
                </div>
                <span className="card-reserve">
                  <p>reservar</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#f2f2f2"
                    height="0.85rem"
                    width="0.85rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
          <div className="slider-arrow-controler">
            <div className="swiper-button-prev slider-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="#fff"
                height="16"
                width="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div className="swiper-button-next slider-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="#fff"
                height="16"
                width="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

const barbersData = [
  {
    firstName: 'Jimmy',
    lastName: 'Ruiz',
    description: 'Barbero profesional',
    img: 'img/barber1.png',
  },
  {
    firstName: 'Larry',
    lastName: 'Ruiz',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/fP4ZDJNKHgbQ/profilepic.png',
  },
  {
    firstName: 'Ricardo',
    lastName: 'Lanza',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/fYpxloutTmyu/profilepic.png',
  },
  {
    firstName: 'Dylan',
    lastName: 'Corea',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/f9p4dtpGCBZh/profilepic.png',
  },
  {
    firstName: 'Jose M',
    lastName: 'Pasos',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/fBBXRq7ZnNit/whatsapp-image-2024-05-16-at-6-05-03-pm.jpeg',
  },
  {
    firstName: 'Tony',
    lastName: 'Tenorio',
    description: '-Barbero Premium',
    moredetails: 'Mostrar más',
    img: 'https://avatar.anywhere.app/files/img/fMH6X3TfXY5i/1723231370335.png',
  },
  {
    firstName: 'Kenneth',
    lastName: 'Ruiz',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/f5KbbT74cwI7/1728182588018.png',
  },
  {
    firstName: 'Yoel',
    lastName: 'Martinez',
    description: 'Barbero profesional',
    img: 'https://avatar.anywhere.app/files/img/fFqu76FLpI6l/aw-image-630.jpeg',
  },
]

export default Barbers
