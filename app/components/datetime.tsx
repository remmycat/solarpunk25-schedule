"use client";

import * as React from "react";

export type DateTimeContextValue = {
  dateTimeFormatter: Intl.DateTimeFormat;
  timeFormatter: Intl.DateTimeFormat;
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

const spStandardTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "MST7MDT",
  ...commonTimeDisplayOptions,
});

export const DateTimeContext = React.createContext<DateTimeContextValue>({
  dateTimeFormatter: spStandardDtFormatter,
  timeFormatter: spStandardTimeFormatter,
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

  // first client render, before paint: set client locale/timezone
  React.useLayoutEffect(() => {
    setDefaultDateTimeFormatter(
      new Intl.DateTimeFormat(undefined, commonDateTimeDisplayOptions),
    );
    setDefaultTimeFormatter(
      new Intl.DateTimeFormat(undefined, commonTimeDisplayOptions),
    );
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

  const value = React.useMemo<DateTimeContextValue>(
    () => ({ dateTimeFormatter, timeFormatter, setLocale, setTimeZone }),
    [dateTimeFormatter, timeFormatter, setLocale, setTimeZone],
  );

  return (
    <DateTimeContext.Provider value={value}>
      {children}
    </DateTimeContext.Provider>
  );
}

export type DateTimeProps = {
  isoDate: string;
};

export function DateTime({ isoDate }: DateTimeProps) {
  const { dateTimeFormatter } = React.useContext(DateTimeContext);

  const localDateString = React.useMemo(() => {
    const date = new Date(isoDate);
    return dateTimeFormatter.format(date);
  }, [isoDate, dateTimeFormatter]);

  return (
    <time dateTime={isoDate} suppressHydrationWarning>
      {localDateString}
    </time>
  );
}

export function Time({ isoDate }: DateTimeProps) {
  const { timeFormatter } = React.useContext(DateTimeContext);

  const localTimeString = React.useMemo(() => {
    const date = new Date(isoDate);
    return timeFormatter.format(date);
  }, [isoDate, timeFormatter]);

  return (
    <time dateTime={isoDate} suppressHydrationWarning>
      {localTimeString}
    </time>
  );
}
