import { useEffect, useState } from 'react'
import './styles/Schedule.css'

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hours, setHours] = useState('')
  const [status, setStatus] = useState('')
  const [currentDay, setCurrentDay] = useState(0)

  const toggleDropdown = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const now = new Date()
    const day = now.getDay() // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const currentTime = now.getHours() + now.getMinutes() / 60

    const schedule = {
      weekday: { start: 9, end: 18.75 }, // Lunes a Sábado, 9 AM - 6:45 PM
      sunday: { start: 10, end: 17 }, // Domingo, 10 AM - 5 PM
    }

    const todaySchedule = day === 0 ? schedule.sunday : schedule.weekday
    const isOpenNow =
      currentTime >= todaySchedule.start && currentTime <= todaySchedule.end
    setStatus(isOpenNow ? 'Abierto ahora' : 'Cerrado ahora')
    setHours(day === 0 ? '10 AM - 5 PM' : '9 AM - 6:45 PM')
    setCurrentDay(day)
  }, [])




  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  return (
    <>
      <div className="dropdown" onClick={toggleDropdown}>
        <svg
          className="time-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          width="16"
          height="16"
          stroke="#f5f5f5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div className="dropdown-toggle">
          {status}
          <svg
            className={`arrow ${isOpen ? 'open' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width="16"
            height="16"
            stroke="#f5f5f5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {days.map((dayName, index) => (
              <li
                key={index}
                className={currentDay === index ? 'current-day' : ''}
              >
                <span>{dayName}:</span>{' '}
                <span>{index === 0 ? '10 AM - 5 PM' : '9 AM - 6:45 PM'}</span>
              </li>
            ))}
          </ul>
        )}
        <span className="current-hours">{hours}</span>
      </div>
    </>
  )
}


export default Schedule
