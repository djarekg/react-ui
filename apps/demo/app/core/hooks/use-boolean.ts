import { useCallback, useState } from 'react';

/**
 * Custom hook to manage a boolean state.
 *
 * @param {boolean} initialValue Initial boolean value.
 */
export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, setTrue, setFalse, toggle };
}
