"use client";

import * as React from "react";
import { DateTimeContext } from "./datetime";

export function Settings() {
  const { setTimeZone } = React.useContext(DateTimeContext);

  return (
    <form id="settings" action="#" aria-labelledby="settings-form-head">
      <h2 id="settings-form-head"> Site Settings</h2>
      <noscript>
        <p>
          Oh hi, it looks like you disabled javascript on this page! While
          javascript isn&apos;t necessary to display the schedule, it allows the
          page to show the times in your default timezone. This page contains no
          trackers.
        </p>
      </noscript>
      <label>
        <input id="sans-serif-pls" type="checkbox" />
        <span>Use Sans-Serif Fonts</span>
      </label>
      <label>
        <input id="dark-mode-pls" type="checkbox" />
        <span>Use Dark Mode (forced)</span>
      </label>
      <label>
        <input id="one-column-pls" type="checkbox" />
        <span>Seperate Track Tables</span>
      </label>
      <label>
        <input
          onChange={(e) => {
            setTimeZone(e.target.checked ? "America/Denver" : undefined);
          }}
          type="checkbox"
        />
        <span>Use Conference Timezone (MST)</span>
      </label>
    </form>
  );
}
