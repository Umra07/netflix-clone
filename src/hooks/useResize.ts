import { useCallback, useEffect, useState } from 'react';

const useResize = (myRef: any): { width: string; height: string } => {
  const [size, setSize] = useState({ width: '0', height: '0' });

  useEffect(() => {
    if (myRef.current && myRef.current.clientWidth) {
      setSize({ ...size, width: `${myRef.current.clientWidth}px` });
    }
  }, [myRef]);

  return size;
};

export default useResize;
