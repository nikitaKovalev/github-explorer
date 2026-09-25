import { useEffect, useState } from "react";

export const DEBOUNCE_TIME = 300 as const;

export default function useDebounce<T>(value: T, delayMs = DEBOUNCE_TIME) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(handler);
  }, [value, delayMs]);

  return debouncedValue;
}