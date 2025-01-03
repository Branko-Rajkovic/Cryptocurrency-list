import { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("in useFetch");
        setData(() => json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("return", data);
  if (data) return () => ({ data, isLoading, error });
};
