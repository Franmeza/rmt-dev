import { useEffect, useState } from "react";
/* This custom hook receive the name to get or store an item in the local storage and initial value in case the local storage is empty. it is implemented in a generic way so it can be used in other contexts*/

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
