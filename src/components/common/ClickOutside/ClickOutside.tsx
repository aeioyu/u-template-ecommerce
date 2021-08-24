import React, { useRef, useEffect } from 'react';
import { hasParent } from './ClickOutside.util';

interface ClickOutsideProps {
  active: boolean;
  onClick: (e?: MouseEvent) => void;
  children: any;
}

const ClickOutside: React.FC<ClickOutsideProps> = ({ active = true, onClick, children }) => {
  const innerRef = useRef();

  const handleClick = (event: MouseEvent): void => {
    const isHasParent = hasParent(event.target, innerRef?.current);
    if (!isHasParent) {
      if (typeof onClick === 'function') {
        onClick(event);
      }
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
    }

    return () => {
      if (active) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }
    };
  });

  return React.cloneElement(children, { ref: innerRef });
};

export default ClickOutside;
