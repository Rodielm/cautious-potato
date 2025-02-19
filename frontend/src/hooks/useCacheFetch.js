import { useState, useEffect } from "react";
import axios from "axios";

const CACHE_EXPIRATION = 3600000; // 1 hora en milisegundos

const useCacheFetch = (key, url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener datos desde caché
  const getCachedData = () => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { timestamp, data } = JSON.parse(cached);
    return Date.now() - timestamp > CACHE_EXPIRATION ? null : data;
  };

  // Función para guardar en caché
  const saveToCache = (data) => {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Verificar si hay datos en caché
        const cachedData = getCachedData();
        if (cachedData) {
          setData(cachedData);
        } else {
          // Si no hay caché o expiró, llamar a la API
          const response = await axios.get(url);
          setData(response.data);
          saveToCache(response.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, url]); // Se ejecuta cuando cambian los parámetros

  return { data, loading, error };
};

export default useCacheFetch;
