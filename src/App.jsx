import { useRandomCountry } from "./hooks/useRandomCountry";
import { CountryCard } from "./componentes/CountryCard";
import "./App.css";

export default function App() {
  const { country, error, loading, roll } = useRandomCountry();

  return (
    <main className="app">
      <h1>Países del Mundo</h1>
      {country && <CountryCard country={country} />}
    </main>
  );
}
