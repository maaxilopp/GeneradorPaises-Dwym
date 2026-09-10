import { useEffect, useState } from "react";
import { dateAtTimezone, horaEn } from "../utils/time";

export function useZonedClock(timezone) {
  const [clock, setClock] = useState({ hora: "", date: null });

  useEffect(() => {
    if (!timezone) return;
    const tick = () =>
      setClock({
        hora: horaEn(timezone),
        date: dateAtTimezone(timezone),
      });

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return clock;
}
