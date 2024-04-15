import { useEffect, useState } from "react";
/* This custom hook receive the name to get or store an item in the local storage and initial value in case the local storage is empty. it is implemented in a generic way so it can be used in other contexts*/

export default function useLocalStorage(key: string, initialValue) {
  const [value, setValue] = useState(() =>
    JSON.parse(
      localStorage.getItem("bookmarks") || JSON.stringify(initialValue)
    )
  );

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
