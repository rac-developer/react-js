
import { useEffect, useState } from "react";

export const useFecth = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [controller, setController] = useState<AbortController | null>(null)

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        if ( error.name === 'AbortError') {
          console.log('Request canceled');
        } else {
          setError(error);
        }
      })
      .finally (() => setLoading(false))

      return () => abortController.abort();
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError('Request canceled');
    }
  }

  return {data, loading, error, handleCancelRequest};
}