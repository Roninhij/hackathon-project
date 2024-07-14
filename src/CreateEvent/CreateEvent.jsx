import React, { useState } from 'react'
import { useGlobalContext } from '../Context'
import './CreateEvent.css'

function CreateEvent() {
  const { addEvent } = useGlobalContext()

  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [participantsAmount, setParticipantsAmount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const eventData = {
      time,
      place,
      participantsAmount,
    }
    addEvent(eventData)
    console.log(`Event Added: ${JSON.stringify(eventData)}`)
    // Reset form after submission
    setTime('')
    setPlace('')
    setParticipantsAmount(0)
  }

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="event-time-container">
          <label htmlFor="eventTime">Event Time:</label>
          <input
            className="input-container"
            id="eventTime"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="event-place-container">
          <label htmlFor="eventPlace">Event Place:</label>
          <input
            className="input-container"
            id="eventPlace"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="number-of-paticipants-container">
          <label htmlFor="participants">Number of Participants:</label>
          <button
            className="plus-minus"
            type="button" // Explicitly set button type to "button"
            onClick={() =>
              setParticipantsAmount((prevCount) => Math.max(prevCount - 1, 0))
            } // Ensure participants count doesn't go below 0
          >
            -
          </button>
          <span>{participantsAmount}</span>
          <button
            className="plus-minus"
            type="button" // Explicitly set button type to "button"
            onClick={() => setParticipantsAmount((prevCount) => prevCount + 1)}
          >
            +
          </button>
        </div>
        <button className="btn-form-container" type="submit">
          Create Event
        </button>
      </form>
    </div>
  )
}

export default CreateEvent
