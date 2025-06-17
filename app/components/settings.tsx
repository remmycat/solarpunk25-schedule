"use client";

import * as React from "react";
import { DateTimeContext } from "./datetime";

export function Settings() {
  const { dateTimeFormatter, setTimeZone } = React.useContext(DateTimeContext);

  return (
    <>
      <p>
        Timezone:{" "}
        <strong suppressHydrationWarning>
          {dateTimeFormatter.resolvedOptions().timeZone}
        </strong>
      </p>
      <form id="settings" action="#" aria-labelledby="settings-form-head">
        <h2 id="settings-form-head"> Site Settings</h2>
        <noscript>
          <p>
            Oh hi, it looks like you disabled javascript on this page! While
            javascript isn&apos;t necessary to display the schedule, it allows
            the page to show the times in your default timezone. This page
            contains no trackers.
          </p>
        </noscript>
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
        <label>
          <input
            onChange={(e) => {
              setTimeZone(e.target.checked ? "America/Denver" : undefined);
            }}
            type="checkbox"
          />
          Use Event Timezone (MDT)
        </label>
      </form>
    </>
  );
}
