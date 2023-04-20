import { useEffect, useState } from 'react';

const useResize = (myRef: any): { width: string; height: string } => {
  const [size, setSize] = useState({ width: '0', height: '0' });

  if (myRef.current && myRef.current.clientWidth) {
    setSize({
      height: `${myRef.current.clientHeight}px`,
      width: `${myRef.current.clientWidth}px`,
    });
  }
  return size;
};

export default useResize;
