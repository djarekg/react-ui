import { useState } from 'react';

/**
 * Custom hook to manage a boolean state.
 *
 * @param {boolean} initialValue Initial boolean value.
 */
export default function useBoolean(initialValue = false) {
  'use memo';

  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, setTrue, setFalse, toggle };
}
