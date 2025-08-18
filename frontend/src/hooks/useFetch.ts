import { useEffect, useState } from 'react';

interface IUseFetch<T> {
  data: T | [];
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): IUseFetch<T> {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Ошибка при запросе: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          setData(data);
        }
      } catch (err: unknown) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Неизвестная ошибка');
          }
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
