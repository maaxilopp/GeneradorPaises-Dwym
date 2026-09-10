export async function getRandomCountry() {
  const res = await fetch(
    "https://countries.dev/random?fields=name,alpha2Code,flags,timezones,capital",
  );
  if (!res.ok) throw new Error("No se pudo cargar el país");
  return res.json();
}
