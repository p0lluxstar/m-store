import { useEffect, useState } from 'react';

export function useFetch<T>(url: string): any {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Ошибка при запросе: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          setData(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Неизвестная ошибка');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // защита от утечек памяти
    return (): void => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
