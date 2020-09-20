import { useState, useEffect } from 'react';

const usePersistedState = (key: any, initialState: any) => {
  const [myState, setMyState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(myState));
  }, [key, myState]);

  return [myState, setMyState];
};

export default usePersistedState;
