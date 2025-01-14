import { useEffect, useRef } from 'react';

type UseObserverParams = {
  canLoad?: boolean;
  isFetching: boolean;
  ref: React.RefObject<HTMLDivElement>;
  callback: () => void;
};

export const useObserver = ({
  isFetching,
  ref,
  callback,
  canLoad,
}: UseObserverParams) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {

    if (isFetching || !ref.current) return;
    if (observer.current) observer.current.disconnect()

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(observerCallback, {
      threshold: 0,
      //   rootMargin: '0px',
    });

    observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [isFetching, ref, callback, canLoad]);
};
