import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

// Convierte un string de zona horaria (ej. "UTC+02:00") a minutos de offset por ejemplo "UTC+02:00" => 120, "UTC-05:30" => -330, "UTC" => 0
export function offsetToMinutes(tz) {
  const m = /^UTC([+-])(\d{2}):(\d{2})$/.exec(tz ?? "");
  if (!m) return 0;
  const [, signo, hh, mm] = m;
  return (signo === "-" ? -1 : 1) * (Number(hh) * 60 + Number(mm));
}

// react-clock dibuja la hora LOCAL del Date, así que devolvemos un Date
// cuyos componentes locales coinciden con la hora del país.
export function nowAtOffset(minutes) {
  const d = dayjs().utcOffset(minutes);
  return new Date(
    d.year(),
    d.month(),
    d.date(),
    d.hour(),
    d.minute(),
    d.second(),
  );
}

function partsAtTimezone(timezone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
}

export function dateAtTimezone(timezone) {
  if (/^UTC(?:[+-]\d{2}:\d{2})?$/.test(timezone ?? "")) {
    return nowAtOffset(offsetToMinutes(timezone));
  }

  const { year, month, day, hour, minute, second } = partsAtTimezone(timezone);
  return new Date(year, month - 1, day, hour, minute, second);
}

export function horaEn(timezone) {
  const date = dateAtTimezone(timezone);
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
