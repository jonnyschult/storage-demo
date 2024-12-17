import { useSyncExternalStore, useRef } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const cachedValue = useRef<T>(initialValue);

  const getSnapshot = () => {
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;

      if (JSON.stringify(cachedValue.current) !== JSON.stringify(value)) {
        cachedValue.current = value;
      }

      return cachedValue.current as T;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };

  const subscribe = (listener: () => void) => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        listener();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const currentValue = getSnapshot();
      const newValue = value instanceof Function ? value(currentValue) : value;

      window.localStorage.setItem(key, JSON.stringify(newValue));
      cachedValue.current = newValue;

      window.dispatchEvent(
        new StorageEvent("storage", {
          key,
          newValue: JSON.stringify(newValue),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const value = useSyncExternalStore(subscribe, getSnapshot);

  return [value, setValue] as const;
};

export default useLocalStorage;

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage<"light" | "dark" | null>(
    "theme",
    null
  );
  return { themeMode, setThemeMode } as const;
};
