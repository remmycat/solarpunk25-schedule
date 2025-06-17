import * as React from "react";
import { Duration } from "./datetime";
import { type EventData, type Speaker } from "../schedule_data";
import Link from "next/link";

type SpEventProps = EventData;

const getDurPropsFromMinutes = (minutes: number) =>
  minutes >= 60
    ? { hours: Math.floor(minutes / 60), minutes: minutes % 60 }
    : { minutes };

function SpeakerName(speaker: Speaker): React.ReactNode {
  if (speaker.href) {
    return (
      <Link target="_blank" href={speaker.href}>
        {speaker.name}
      </Link>
    );
  } else {
    return speaker.name;
  }
}

export function SpEvent({
  speakers = [],
  name,
  eventType = "Talk",
  durationMinutes,
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
          {speakers.map((speaker, index) => (
            <React.Fragment key={index}>
              <SpeakerName {...speaker} />
              {index < speakers.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </span>
      )}
    </div>
  );
}
