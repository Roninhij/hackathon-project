import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../Context";

function EventList() {
  const { Events, subscribeToEvent, unsubscribeFromEvent, user } =
    useGlobalContext();

  console.log("those are events", Events);
  return (
    <div>
      <h2>All Events</h2>
      <ul>
        {Events.map((event) => {
          const isUserParticipating = false;

          return (
            <li key={event.id}>
              <h3>{event.time}</h3>
              <p>Place: {event.place}</p>
              <h4>Participants:</h4>
              <ul>
                {event.participants &&
                  Object.keys(event.participants).map((key) => (
                    <li key={key}>
                      {event.participants[key].name} -{" "}
                      {event.participants[key].email} -{" "}
                      {event.participants[key].phone}
                    </li>
                  ))}
              </ul>
              {isUserParticipating ? (
                <div onClick={() => unsubscribeFromEvent(event.id)}>
                  Logout from event
                </div>
              ) : (
                <div onClick={() => subscribeToEvent(event.id)}>
                  Login to an event
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EventList;
