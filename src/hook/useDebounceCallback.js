import { useState, useEffect } from 'react';

function useDebounceCallback(callback, delay, dependencies = []) {
  const [timer, setTimer] = useState(null);

  useEffect(() => { 
    clearTimeout(timer); 
    const newTimer = setTimeout(() => {
      callback();
    }, delay); 
    setTimer(newTimer); 
    return () => {
      clearTimeout(newTimer);
    };
  }, [...dependencies, delay]); 
  const cancelDebounce = () => {
    clearTimeout(timer);
  }; 
  return cancelDebounce;
} 
export default useDebounceCallback;
