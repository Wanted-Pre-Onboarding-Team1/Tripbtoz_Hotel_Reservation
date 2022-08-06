import { useState, useRef } from 'react';

type ReturnTypes = [boolean, () => void];

export default function useToggle(
  paramState?: any,
  initialValue = false,
): ReturnTypes {
  const [value, setValue] = useState(initialValue);
  const initial = useRef<any>(paramState);

  const onToggle = () => {
    // console.log(value);
    if (paramState) {
      setValue(true);
      if (
        paramState.date.checkout &&
        paramState.date.checkout !== initial.current.date.checkout
      ) {
        // setValue(!value);
        setValue(false);
        initial.current = paramState;
      }
    } else {
      setValue(!value);
    }
  };

  return [value, onToggle];
}
