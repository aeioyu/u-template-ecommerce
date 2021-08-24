import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  variant?: TextVariant;
  as?: keyof JSX.IntrinsicElements;
  bold?: boolean;
  italic?: boolean;
}

type TextVariant =
  | 'text-heading-1'
  | 'text-heading-2'
  | 'text-heading-3'
  | 'text-heading-4'
  | 'text-heading-5'
  | 'text-subtitle'
  | 'text-body'
  | 'text-caption';

const Text: React.FC<Props> = ({
  variant = 'text-body',
  className,
  children,
  as: Element = 'span',
  bold,
  italic,
  ...rest
}) => {
  return (
    <Element
      className={clsx(
        {
          'font-bold': bold,
          italic: italic,
        },
        variant,
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Text;
