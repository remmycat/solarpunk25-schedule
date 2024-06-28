import * as React from "react";

export type SpEventProps = {
  eventType?: string;
  speakers: Array<{
    name: string;
    href?: string;
  }>;
  name: string;
};

export function SpEvent({ speakers, name, eventType }: SpEventProps) {
  const title = (eventType ? `${eventType}: ` : "") + name;
  return (
    <>
      <strong>{title}</strong>
      <br />
      {speakers.map((speaker, index) => {
        let linked = speaker.href ? <a href={speaker.href}>{name}</a> : name;
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
    </>
  );
}
