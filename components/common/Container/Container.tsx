import 'twin.macro';
import React from 'react';

interface Props {
  className?: string;
  el?: HTMLElement;
}

const Container: React.FC<Props> = ({ className, children, el = 'div', ...rest }) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return (
    <Component tw="px-4 mx-auto max-w-screen-xl" className={className} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
