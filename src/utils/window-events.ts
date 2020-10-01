import { useEffect } from 'react';

export const useWindowEvent = (
  event: string,
  callback: (event: Event) => void,
) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};
