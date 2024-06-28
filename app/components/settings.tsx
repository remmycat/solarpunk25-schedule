"use client";

import * as React from "react";
import { DateTimeContext } from "./datetime";

export function Settings() {
  const { dateTimeFormatter } = React.useContext(DateTimeContext);

  return (
    <>
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
          page to show the times in your default timezone and date format. This
          page contains no trackers or other scripts.
        </p>
      </noscript>
    </>
  );
}
