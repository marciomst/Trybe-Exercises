import { useEffect } from 'react';

const useInterval = (callback, interval) => {
  // didMount + willUnmount
  useEffect(() => {
    callback();
    const intervalId = setInterval(callback, interval);
    return () => { clearInterval(intervalId); };
  }, [callback, interval]);
};

export default useInterval;
