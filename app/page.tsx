import { Settings } from "./components/settings";
import { DateTime, DateTimeContextProvider } from "./components/datetime";
import { Schedule } from "./components/schedule";

export default function Home() {
  return (
    <DateTimeContextProvider>
      <main>
        <h1>Solarpunk Conference 2025 Schedule</h1>
        <p>
          <em>
            Last updated:{" "}
            <DateTime isoDate={new Date().toISOString()} durationMinutes={0} />
            {" – "}
            Made with love by{" "}
            <a href="https://github.com/remmycat">Remmy Cat</a> {" – "} The
            future is accessible!
          </em>
        </p>
        <Settings />
        <section aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p>
            This is an unofficial recreation of the{" "}
            <a href="https://www.solarpunkconference.com/schedule">
              image-based Solarpunk Conference 2025 schedule
            </a>
            . It aims to be accessible and automatically adjusts to your
            timezone and dark mode settings.{" "}
          </p>
          <p>
            <strong>
              The schedule might not be up-to-date if there are changes on the
              day of the conference.{" "}
            </strong>
            I may be able to fix inaccuracies or issues quickly if you report
            them on the GitHub{" "}
            <a href="https://github.com/remmycat/solarpunk25-schedule/issues">
              Issue tracker
            </a>{" "}
            for this website.
          </p>
        </section>

        <Schedule sectionClassName="big-table" />
        <Schedule onlyTrack={1} sectionClassName="track-table track-1" />
        <Schedule onlyTrack={2} sectionClassName="track-table track-2" />
      </main>
    </DateTimeContextProvider>
  );
}
