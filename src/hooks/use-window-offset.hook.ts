import { useEffect, useState } from 'react';

/**
 * Listens to the window scroll to retrieve `Y` offset.
 * @param calc optional calculation function to run math operations based on offset value
 * @returns offset value or calculated value
 */
export function useWindowOffset(calc?: (offset: number) => number): number {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // update state
    const parallaxShift = () => setOffset(window.pageYOffset);
    // create listener
    window.addEventListener('scroll', parallaxShift);
    // cleanup listener
    return () => window.removeEventListener('scroll', parallaxShift);
  }, []);

  return calc ? calc(offset) : offset;
}
