import { Settings } from "./components/settings";
import { DateTime, DateTimeContextProvider } from "./components/datetime";
import { Schedule } from "./components/schedule";

export default function Home() {
  return (
    <DateTimeContextProvider>
      <main>
        <h1>Solarpunk Conference 2024 Schedule</h1>
        <em>
          Last updated: <DateTime isoDate={new Date().toISOString()} />
        </em>
        <p>
          This is an unofficial recreation of the{" "}
          <a href="https://www.solarpunkconference.com/schedule">
            image-based Solarpunk Conference 2024 schedule
          </a>
          .<br />
          It is less pretty than the original, but aims to be accessible, and
          automatically adjusted to your timezone. The schedule might not be
          up-to-date if there are changes on the day of the conference.
        </p>
        <Settings />
        <Schedule />
      </main>
    </DateTimeContextProvider>
  );
}
