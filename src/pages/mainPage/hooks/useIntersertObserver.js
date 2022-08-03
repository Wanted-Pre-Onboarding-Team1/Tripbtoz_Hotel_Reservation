import React from 'react';

const defaultOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const useIntersectObserver = (options = defaultOption) => {
  const observeTargetRef = React.useRef();
  const [isTargetVisible, setTargetVisible] = React.useState(false);

  React.useEffect(() => {
    const onTargetVisible = ([entry]) => {
      setTargetVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(onTargetVisible, options);

    observeTargetRef.current && observer.observe(observeTargetRef.current);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isTargetVisible, observeTargetRef };
};

export default useIntersectObserver;
