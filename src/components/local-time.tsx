"use client";

import { useEffect, useState } from "react";

import { site } from "@/data/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/**
 * Renders nothing on the server so the markup can't mismatch the client clock.
 */
const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 10_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="text-ink-faint text-xs">
      Bangkok
      <span className="mx-1.5 text-ink-line">/</span>
      <span suppressHydrationWarning className="text-ink-dim tabular-nums">
        {time ?? "--:--"}
      </span>
      <span className="ml-1.5">GMT+7</span>
    </p>
  );
};

export default LocalTime;
