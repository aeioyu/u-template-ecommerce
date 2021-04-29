import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  el?: HTMLElement;
}

const Container: React.FC<Props> = ({ className, children, el = 'div', ...rest }) => {
  const rootClassName = cn(className, 'mx-auto xl:container px-4 xl:px-2');
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component className={rootClassName} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
