import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { useZonedClock } from "../hooks/useZonedClock";

export function CountryClock({ timezone }) {
  const { hora, date } = useZonedClock(timezone);
  if (!hora || !date) return null;

  return (
    <div className="clock">
      <Clock value={date} size={180} />
      <p className="digital">{hora}</p>
      <p className="tz">{timezone}</p>
    </div>
  );
}
