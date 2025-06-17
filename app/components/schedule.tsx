import { EventData, EVENTS, TRACK_1, TRACK_2 } from "../schedule_data";
import { DateTime, Time } from "./datetime";
import { SpEvent } from "./event";
import * as React from "react";

const spIsoDate = (hourAndMinute: string) =>
  `2025-06-21T${hourAndMinute}:00.000-06:00`;

function EventList({ evs }: { evs: EventData[] }): React.ReactNode {
  return (
    <ol>
      {evs.map((ev, i) => (
        <li key={`li-${i}`}>
          <SpEvent {...ev} />
        </li>
      ))}
    </ol>
  );
}

function RowHead({
  isoDate,
  capstone,
  m,
}: {
  isoDate: string;
  capstone?: boolean;
  m: number;
}) {
  return (
    <th scope="row">
      {capstone ? (
        <DateTime isoDate={isoDate} durationMinutes={m} />
      ) : (
        <Time isoDate={isoDate} durationMinutes={m} />
      )}
    </th>
  );
}

type TrackTrProps = React.HTMLProps<HTMLTableRowElement> & {
  track?: 1 | 2;
};

export type ScheduleProps = {
  sectionClassName: string;
  onlyTrack?: 1 | 2;
};
export function Schedule({ sectionClassName, onlyTrack }: ScheduleProps) {
  const hasAllTracks = onlyTrack == null;
  const hasTrack1 = hasAllTracks || onlyTrack === 1;
  const hasTrack2 = hasAllTracks || onlyTrack === 2;

  const sectionHeading = [
    onlyTrack === 1 && TRACK_1,
    onlyTrack === 2 && TRACK_2,
    "Schedule",
  ]
    .filter(Boolean)
    .join(" ");

  const tableClass = hasAllTracks ? "multi-track" : "single-track";

  const mainTrackSpan = hasAllTracks ? 2 : 1;

  const tid = (id: string) => (hasAllTracks ? id : `${id}_track_${onlyTrack}`);

  return (
    <section
      className={["sched-section", sectionClassName].filter(Boolean).join(" ")}
      aria-labelledby={tid("schedule-caption")}
    >
      <table className={tableClass}>
        <caption id={tid("schedule-caption")}>
          <h2>{sectionHeading}</h2>
        </caption>
        <colgroup>
          <col className="time-col" />
        </colgroup>
        <colgroup>
          <col className="track-col" />
          {hasAllTracks && <col className="track-col" />}
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowSpan={hasAllTracks ? 2 : 1}>
              Time
            </th>
            <th scope="colgroup" colSpan={hasAllTracks ? 2 : 1}>
              Event
            </th>
          </tr>
          {hasAllTracks && (
            <tr>
              <th scope="col">{TRACK_1}</th>
              <th scope="col">{TRACK_2}</th>
            </tr>
          )}
        </thead>
        <tbody>
          {hasTrack1 && (
            <tr>
              <RowHead m={15} capstone isoDate={spIsoDate("08:30")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.opening} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={15} isoDate={spIsoDate("08:45")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.landack} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={75} isoDate={spIsoDate("09:00")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.keynote} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr className="break">
              <RowHead m={15} isoDate={spIsoDate("10:15")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.break15} />
              </td>
            </tr>
          )}
          <tr>
            <RowHead
              m={60}
              capstone={onlyTrack === 2}
              isoDate={spIsoDate("10:30")}
            />
            {hasTrack1 && (
              <td>
                <EventList
                  evs={[
                    EVENTS.transformation_ecosystems,
                    EVENTS.listening_nature,
                  ]}
                />
              </td>
            )}
            {hasTrack2 && (
              <td>
                <EventList
                  evs={[
                    EVENTS.weaving_future,
                    EVENTS.eco_futures,
                    EVENTS.ecotopia,
                  ]}
                />
              </td>
            )}
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("11:30")} />
            {hasTrack1 && (
              <td>
                <SpEvent {...EVENTS.break15} track="Track A" />
              </td>
            )}
            {hasTrack2 && (
              <td>
                <SpEvent {...EVENTS.break15} />
              </td>
            )}
          </tr>
        </tbody>
        <tbody className="row-group">
          <tr>
            <RowHead m={30} isoDate={spIsoDate("11:45")} />
            {hasTrack1 && (
              <td>
                <SpEvent {...EVENTS.repair} />
              </td>
            )}
            {hasTrack2 && (
              <td rowSpan={onlyTrack === 2 ? 1 : 2}>
                <SpEvent {...EVENTS.fiction_workshop} />
              </td>
            )}
          </tr>
          {hasTrack2 && (
            <tr>
              <RowHead
                m={30}
                capstone={onlyTrack === 2}
                isoDate={spIsoDate("12:15")}
              />

              <td>
                <SpEvent {...EVENTS.speculative_tech} />
              </td>
            </tr>
          )}
        </tbody>
        <tbody>
          {hasTrack1 && (
            <tr className="break">
              <RowHead m={75} isoDate={spIsoDate("12:45")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.lunch_break} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={15} isoDate={spIsoDate("14:00")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.utopian_realism} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={15} isoDate={spIsoDate("14:15")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.aviation} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr className="break">
              <RowHead m={15} isoDate={spIsoDate("14:30")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.break15} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={60} isoDate={spIsoDate("14:45")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.arcane} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr className="break">
              <RowHead m={15} isoDate={spIsoDate("15:45")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.break15} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={60} isoDate={spIsoDate("16:00")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.rest} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr className="break">
              <RowHead m={15} isoDate={spIsoDate("17:00")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.break15} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={30} isoDate={spIsoDate("17:15")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.arcology} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead m={30} isoDate={spIsoDate("17:45")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.closing} />
              </td>
            </tr>
          )}
          {hasTrack1 && (
            <tr>
              <RowHead capstone m={15} isoDate={spIsoDate("18:00")} />
              <td colSpan={mainTrackSpan}>
                <SpEvent {...EVENTS.afterparty} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
