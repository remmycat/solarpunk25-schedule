import * as React from "react";
import { Duration } from "./datetime";
import { EventData } from "../schedule_data";

type SpEventProps = EventData;

const getDurPropsFromMinutes = (minutes: number) =>
  minutes >= 60
    ? { hours: Math.floor(minutes / 60), minutes: minutes % 60 }
    : { minutes };

export function SpEvent({
  speakers = [],
  name,
  eventType = "Talk",
  durationMinutes,
  track,
}: SpEventProps) {
  return (
    <div className="event">
      <span className="event-type">
        <strong>{eventType} </strong>
        {typeof durationMinutes === "number" && (
          <span className="event-duration">
            <Duration {...getDurPropsFromMinutes(durationMinutes)} />
          </span>
        )}
      </span>
      {name && (
        <strong
          className="event-name"
          dangerouslySetInnerHTML={{ __html: name }}
        />
      )}
      {speakers.length > 0 && (
        <span className="authors">
          {speakers.map((speaker, index) => {
            let linked = speaker.href ? (
              <a href={speaker.href}>{name}</a>
            ) : (
              name
            );
            return (
              <React.Fragment key={index}>
                {speaker.href ? (
                  <a href={speaker.href}>{speaker.name}</a>
                ) : (
                  speaker.name
                )}
                {index < speakers.length - 1 ? ", " : ""}
              </React.Fragment>
            );
          })}
        </span>
      )}
    </div>
  );
}
