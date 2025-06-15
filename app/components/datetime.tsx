"use client";

import * as React from "react";

export type DurationArgument = {
  hours?: number;
  minutes?: number;
};

export type DateTimeContextValue = {
  dateTimeFormatter: Intl.DateTimeFormat;
  timeFormatter: Intl.DateTimeFormat;
  durationFormatter: { format: (dur: DurationArgument) => string };
  setTimeZone: (tz: string) => void;
  setLocale: (locale: string) => void;
};

const commonDateTimeDisplayOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const commonTimeDisplayOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

const spStandardDtFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "MST7MDT",
  ...commonDateTimeDisplayOptions,
});

const fallbackDurationFormatter: DateTimeContextValue["durationFormatter"] = {
  format({ minutes, hours }) {
    // Filtering out 0 is intended
    return [hours && `${hours} hr`, minutes && `${minutes} min`]
      .filter(Boolean)
      .join(", ");
  },
};

const spStandardDurationFormatter =
  "DurationFormat" in Intl
    ? //@ts-ignore
      new Intl.DurationFormat("en-US", {
        style: "short",
      })
    : fallbackDurationFormatter;

const spStandardTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "MST7MDT",
  ...commonTimeDisplayOptions,
});

export const DateTimeContext = React.createContext<DateTimeContextValue>({
  dateTimeFormatter: spStandardDtFormatter,
  timeFormatter: spStandardTimeFormatter,
  durationFormatter: spStandardDurationFormatter,
  setTimeZone: () => {},
  setLocale: () => {},
});

export type DateTimeContextProviderProps = {
  children: React.ReactNode;
};

export function DateTimeContextProvider({
  children,
}: DateTimeContextProviderProps) {
  // no-js static / initial render SP24 standard time format
  const [defaultDateTimeFormatter, setDefaultDateTimeFormatter] =
    React.useState(spStandardDtFormatter);
  const [defaultTimeFormatter, setDefaultTimeFormatter] = React.useState(
    spStandardTimeFormatter,
  );
  const [defaultDurationFormatter, setDefaultDurationFormatter] =
    React.useState(spStandardDurationFormatter);

  // first client render, before paint: set client locale/timezone
  React.useLayoutEffect(() => {
    setDefaultDateTimeFormatter(
      new Intl.DateTimeFormat(undefined, commonDateTimeDisplayOptions),
    );
    setDefaultTimeFormatter(
      new Intl.DateTimeFormat(undefined, commonTimeDisplayOptions),
    );
    if ("DurationFormat" in Intl) {
      setDefaultDurationFormatter(
        // @ts-ignore
        new Intl.DurationFormat(undefined, {
          style: "short",
        }),
      );
    }
  }, [setDefaultDateTimeFormatter]);

  const [locale, setLocale] = React.useState<string | undefined>(undefined);
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined);

  const dateTimeFormatter = React.useMemo(
    () =>
      locale || timeZone
        ? new Intl.DateTimeFormat(locale, {
            timeZone,
            ...commonDateTimeDisplayOptions,
          })
        : defaultDateTimeFormatter,
    [locale, timeZone, defaultDateTimeFormatter],
  );

  const timeFormatter = React.useMemo(
    () =>
      locale || timeZone
        ? new Intl.DateTimeFormat(locale, {
            timeZone,
            ...commonTimeDisplayOptions,
          })
        : defaultTimeFormatter,
    [locale, timeZone, defaultTimeFormatter],
  );

  const durationFormatter = React.useMemo(
    () =>
      locale || timeZone
        ? // @ts-ignore
          new Intl.DurationFormat(local, {
            style: "short",
          })
        : defaultDurationFormatter,
    [locale, timeZone, defaultDurationFormatter],
  );

  const value = React.useMemo<DateTimeContextValue>(
    () => ({
      dateTimeFormatter,
      timeFormatter,
      setLocale,
      setTimeZone,
      durationFormatter,
    }),
    [
      dateTimeFormatter,
      durationFormatter,
      timeFormatter,
      setLocale,
      setTimeZone,
    ],
  );

  return (
    <DateTimeContext.Provider value={value}>
      {children}
    </DateTimeContext.Provider>
  );
}

const isItNow = (startIso: string, durationMinutes: number): boolean => {
  const startDate = new Date(startIso);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);
  const now = Date.now();
  const isNow = startDate.getTime() <= now && now < endDate.getTime();

  return isNow;
};

function useIsNow(isoDate: string, durationMinutes: number): boolean {
  const [isNow, setIsNow] = React.useState(false);

  React.useEffect(() => {
    setIsNow(isItNow(isoDate, durationMinutes));

    const interval = setInterval(() => {
      setIsNow(isItNow(isoDate, durationMinutes));
    }, 5000);

    return () => clearInterval(interval);
  }, [isoDate, durationMinutes]);

  return isNow;
}

export type DateTimeProps = {
  isoDate: string;
  durationMinutes: number;
};

export function DateTime({ isoDate, durationMinutes }: DateTimeProps) {
  const { dateTimeFormatter } = React.useContext(DateTimeContext);

  const isNow = useIsNow(isoDate, durationMinutes);

  const localDateString = React.useMemo(() => {
    const date = new Date(isoDate);
    return dateTimeFormatter.format(date);
  }, [isoDate, dateTimeFormatter]);

  return (
    <>
      <time
        className={isNow ? "now" : undefined}
        dateTime={isoDate}
        suppressHydrationWarning
      >
        {localDateString}
      </time>
      <span suppressHydrationWarning>{isNow && " (now)"}</span>
    </>
  );
}

export function Time({ isoDate, durationMinutes }: DateTimeProps) {
  const { timeFormatter } = React.useContext(DateTimeContext);

  const isNow = useIsNow(isoDate, durationMinutes);

  const localTimeString = React.useMemo(() => {
    const date = new Date(isoDate);
    return timeFormatter.format(date);
  }, [isoDate, timeFormatter]);

  return (
    <>
      <time
        dateTime={isoDate}
        className={isNow ? "now" : undefined}
        suppressHydrationWarning
      >
        {localTimeString}
      </time>
      <span suppressHydrationWarning>{isNow && " (now)"}</span>
    </>
  );
}

export function Duration(durationArgs: DurationArgument) {
  const { durationFormatter } = React.useContext(DateTimeContext);

  const localDurString = React.useMemo(() => {
    return durationFormatter.format(durationArgs);
  }, [durationFormatter, durationArgs]);

  return <span suppressHydrationWarning>{localDurString}</span>;
}
