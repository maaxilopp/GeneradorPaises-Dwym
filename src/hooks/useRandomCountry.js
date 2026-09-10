import { useCallback, useEffect, useState } from "react";
import { getRandomCountry } from "../api/countries";

export function useRandomCountry() {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const roll = useCallback(() => {
    setLoading(true);
    setError(null);
    getRandomCountry()
      .then(setCountry)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    roll();
  }, [roll]);

  return { country, error, loading, roll };
}
