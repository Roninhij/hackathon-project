
import React, { useState } from 'react'
import { useGlobalContext } from '../../Context'
import './EventList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function EventList() {
  const { Events, subscribeToEvent, unsubscribeFromEvent, user } =
    useGlobalContext()
  const [toggle, setToggle] = useState(false)

  const handleToggle = (eventID) => {
    if (toggle) {
      unsubscribeFromEvent(eventID)
    } else {
      subscribeToEvent(eventID)
    }
    setToggle(!toggle)
  }

  const countParticipants = (participants) => {
    return participants ? Object.keys(participants).length : 0
  }

  console.log('those are events', Events)
  return (
    <div className="event-list">
      <h2 className="event-list-header fade-in">All Events</h2>
      <ul>
        {Events.map((event) => {
          const isUserParticipating =
            event.participants &&
            Object.values(event.participants).some(
              (participant) => participant.email === user.email
            )
          return (
            <li key={event.id} className="event-item">
              <h3 className="event-time">{event.time}</h3>
              <p className="event-place button-89">Place: {event.place}</p>
              <h4 className="participants-header">
                Participants: {countParticipants(event.participants)}
              </h4>
              <ul className="participant-list">
                {event.participants &&
                  Object.keys(event.participants).map((key) => (
                    <li key={key} className="participant-item">
                      {event.participants[key].name} -{' '}
                      {event.participants[key].email} -{' '}
                      {event.participants[key].phone}
                      <FontAwesomeIcon icon={faUser} />
                    </li>
                  ))}
              </ul>
              <button
                className={`button-21 ${
                  isUserParticipating ? 'toggle-on' : ''
                }`}
                onClick={() => handleToggle(event.id)}
              >
                {isUserParticipating
                  ? 'Logout from event'
                  : 'Login to an event'}
              </button>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isUserParticipating}
                  onChange={() => handleToggle(event.id)}
                />
                <span className="toggle-slider"></span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default EventList
