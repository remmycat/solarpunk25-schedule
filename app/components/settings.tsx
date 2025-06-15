"use client";

import * as React from "react";
import { DateTimeContext } from "./datetime";

export function Settings() {
  const { dateTimeFormatter } = React.useContext(DateTimeContext);

  return (
    <div id="settings">
      <p>
        All times are shown in timezone:{" "}
        <strong suppressHydrationWarning>
          {dateTimeFormatter.resolvedOptions().timeZone}
        </strong>
      </p>
      <noscript>
        <p>
          Oh hi, it looks like you disabled javascript on this page! While
          javascript isn&apos;t necessary to display the schedule, it allows the
          page to show the times in your default timezone and date format as
          well as picking a timezone below. This page contains no trackers.
        </p>
      </noscript>
      <form action="#" aria-labelledby="settings-form-head">
        <h2 id="settings-form-head"> Site Settings</h2>
        <label>
          <input id="sans-serif-pls" type="checkbox" />
          Use Sans-Serif Fonts
        </label>
        <label>
          <input id="dark-mode-pls" type="checkbox" />
          Use Dark Mode (forced)
        </label>
        <label>
          <input id="one-column-pls" type="checkbox" />
          Seperate Track Tables
        </label>
      </form>
    </div>
  );
}
