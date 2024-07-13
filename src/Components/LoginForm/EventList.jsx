import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context";

function EventList() {
  const { Events } = useGlobalContext();

  return (
    <div>
      <h2>All Events</h2>
      <ul>
        {Events.map((event) => (
          <li key={event.id}>
            <h3>{event.time}</h3>
            <p>Place: {event.place}</p>
            <h4>Participants:</h4>
            <ul>
              {event.participants
                ? event.participants.map((participant, index) => (
                    <li key={index}>
                      {participant.name} - {participant.email} -{" "}
                      {participant.phone}
                    </li>
                  ))
                : ""}
            </ul>
            <div>login to an event</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
