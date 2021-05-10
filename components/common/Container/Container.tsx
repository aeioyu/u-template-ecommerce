import React from 'react';
import cn from 'clsx';
import s from './Container.module.css';

interface Props {
  className?: string;
  el?: HTMLElement;
}

const Container: React.FC<Props> = ({ className, children, el = 'div', ...rest }) => {
  const rootClassName = cn(className, s.root);
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component className={rootClassName} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
