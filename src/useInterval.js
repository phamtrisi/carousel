import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
  useEffect(() => {
    let id;
    if (delay) {
      id = setInterval(callback, delay);
    }
    return () => {
      clearInterval(id);
    };
  }, [callback, delay]);
}
