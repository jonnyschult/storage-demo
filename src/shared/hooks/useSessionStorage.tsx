import { useBrowserStorage } from './useBrowserStorage';

const useSessionStorage = <T,>(key: string, initialValue: T) => {
  return useBrowserStorage(key, initialValue, 'sessionStorage');
};
export default useSessionStorage;

export const useStoredAccount = () => {
  const [account, setAccount] = useSessionStorage<string | null>(
    "account",
    null
  );
  return { account, setAccount } as const;
};
