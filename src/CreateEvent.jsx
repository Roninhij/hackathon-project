import React, { useState } from "react";
import { useGlobalContext } from "./Context";

function NewEventForm() {
  const { addEvent } = useGlobalContext();

  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [participantsAmount, setParticipantsAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = {
      time,
      place,
      participantsAmount,
    };
    addEvent(eventData);
    console.log(`Event Added: ${JSON.stringify(eventData)}`);
    // Reset form after submission
    setTime("");
    setPlace("");
    setParticipantsAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventTime">Event Time:</label>
        <input
          id="eventTime"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="eventPlace">Event Place:</label>
        <input
          id="eventPlace"
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="participants">Number of Participants:</label>
        <button
          type="button" // Explicitly set button type to "button"
          onClick={() =>
            setParticipantsAmount((prevCount) => Math.max(prevCount - 1, 0))
          } // Ensure participants count doesn't go below 0
        >
          -
        </button>
        <span>{participantsAmount}</span>
        <button
          type="button" // Explicitly set button type to "button"
          onClick={() => setParticipantsAmount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default NewEventForm;
