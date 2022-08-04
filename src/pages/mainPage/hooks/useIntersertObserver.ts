import React from 'react';

const defaultOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const useIntersectObserver = (options = defaultOption) => {
  const observerRef = React.useRef<any>();
  const [isTargetVisible, setTargetVisible] = React.useState(false);

  React.useEffect(() => {
    const onTargetVisible = ([entry]: any) => {
      setTargetVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(onTargetVisible, options);

    observerRef.current && observer.observe(observerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isTargetVisible, observerRef };
};

export default useIntersectObserver;
