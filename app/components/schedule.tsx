import { EventData, EVENTS, TRACK_1, TRACK_2 } from "../schedule_data";
import { DateTime, Time } from "./datetime";
import { SpEvent } from "./event";
import * as React from "react";

const spIsoDate = (hourAndMinute: string) =>
  `2025-06-21T${hourAndMinute}:00.000-06:00`;

enum Ids {
  Time = "thtime",
  Event = "thevent",
  TimeA = "thgroup1time",
  TrackA1 = "thgroup1track1",
  TrackA2 = "thgroup1track2",
  TrackB1 = "thgroup2track1",
  TrackB2 = "thgroup2track2",
}

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
    <th headers={"thtime"} scope="row">
      {capstone ? (
        <DateTime isoDate={isoDate} durationMinutes={m} />
      ) : (
        <Time isoDate={isoDate} durationMinutes={m} />
      )}
    </th>
  );
}

function MainEvent({ ev }: { ev: EventData }) {
  return (
    <td colSpan={2}>
      <SpEvent {...ev} />
    </td>
  );
}

export function Schedule() {
  return (
    <section aria-labelledby="schedule-caption">
      <table>
        <caption id="schedule-caption">
          <h2>Schedule</h2>
        </caption>
        <colgroup>
          <col />
        </colgroup>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th id={Ids.Time} scope="col" rowSpan={2}>
              Time
            </th>
            <th id={Ids.Event} scope="colgroup" colSpan={2}>
              Event
            </th>
          </tr>
          <tr>
            <th id={Ids.Event} scope="col">
              {TRACK_1}
            </th>
            <th id={Ids.Event} scope="col">
              {TRACK_2}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <RowHead m={15} capstone isoDate={spIsoDate("08:30")} />
            <MainEvent ev={EVENTS.opening} />
          </tr>
          <tr>
            <RowHead m={15} isoDate={spIsoDate("08:45")} />
            <MainEvent ev={EVENTS.landack} />
          </tr>
          <tr>
            <RowHead m={75} isoDate={spIsoDate("09:00")} />
            <MainEvent ev={EVENTS.keynote} />
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("10:15")} />
            <MainEvent ev={EVENTS.break15} />
          </tr>
          <tr>
            <RowHead m={60} isoDate={spIsoDate("10:30")} />
            <td>
              <EventList
                evs={[
                  EVENTS.transformation_ecosystems,
                  EVENTS.listening_nature,
                ]}
              />
            </td>
            <td>
              <EventList
                evs={[
                  EVENTS.weaving_future,
                  EVENTS.eco_futures,
                  EVENTS.ecotopia,
                ]}
              />
            </td>
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("11:30")} />
            <td>
              <SpEvent {...EVENTS.break15} track="Track A" />
            </td>
            <td>
              <SpEvent {...EVENTS.break15} />
            </td>
          </tr>
        </tbody>
        <tbody className="row-group">
          <tr>
            <RowHead m={30} isoDate={spIsoDate("11:45")} />
            <td>
              <SpEvent {...EVENTS.repair} />
            </td>
            <td rowSpan={2}>
              <SpEvent {...EVENTS.fiction_workshop} />
            </td>
          </tr>
          <tr>
            <RowHead m={30} isoDate={spIsoDate("12:15")} />
            <td>
              <SpEvent {...EVENTS.speculative_tech} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="break">
            <RowHead m={75} isoDate={spIsoDate("12:45")} />
            <MainEvent ev={EVENTS.lunch_break} />
          </tr>
          <tr>
            <RowHead m={15} isoDate={spIsoDate("14:00")} />
            <MainEvent ev={EVENTS.utopian_realism} />
          </tr>
          <tr>
            <RowHead m={15} isoDate={spIsoDate("14:15")} />
            <MainEvent ev={EVENTS.aviation} />
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("14:30")} />
            <MainEvent ev={EVENTS.break15} />
          </tr>
          <tr>
            <RowHead m={60} isoDate={spIsoDate("14:45")} />
            <MainEvent ev={EVENTS.arcane} />
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("15:45")} />
            <MainEvent ev={EVENTS.break15} />
          </tr>
          <tr>
            <RowHead m={60} isoDate={spIsoDate("16:00")} />
            <MainEvent ev={EVENTS.rest} />
          </tr>
          <tr className="break">
            <RowHead m={15} isoDate={spIsoDate("17:00")} />
            <MainEvent ev={EVENTS.break15} />
          </tr>
          <tr>
            <RowHead m={30} isoDate={spIsoDate("17:15")} />
            <MainEvent ev={EVENTS.arcology} />
          </tr>
          <tr>
            <RowHead m={30} isoDate={spIsoDate("17:45")} />
            <MainEvent ev={EVENTS.closing} />
          </tr>
          <tr>
            <RowHead m={15} isoDate={spIsoDate("18:00")} />
            <MainEvent ev={EVENTS.afterparty} />
          </tr>
        </tbody>
      </table>
    </section>
  );
}
