import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, storedKey) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(storedKey);
    console.log(storedValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(storedKey, JSON.stringify(value));
    },
    [value, storedKey]
  );

  return [value, setValue];
}
