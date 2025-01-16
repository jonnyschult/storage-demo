import { useBrowserStorage } from './useBrowserStorage';

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  return useBrowserStorage(key, initialValue, 'localStorage');
};

export default useLocalStorage;

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage<"light" | "dark" | null>(
    "theme",
    null
  );
  return { themeMode, setThemeMode } as const;
};
