import React, { forwardRef, ReactNode, JSXElementConstructor, useRef, BaseHTMLAttributes } from 'react';
import cn from 'clsx';
import mergeRefs from 'react-merge-refs';
import { useTheme } from '@/components/ThemeProvider';

export type TextVariants =
  | 'heading1'
  | 'heading2'
  | 'heading2'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'body'
  | 'caption';

export interface Props extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  as?: string | JSXElementConstructor<any>;
  className?: string;
  children: ReactNode;
}

const Text: React.FC<Props> = forwardRef(
  (
    {
      variant = 'body',
      bold = false,
      italic = false,
      underline = false,
      as: Component = 'span',
      className,
      children,
      ...rest
    },
    textRef,
  ) => {
    const ref = useRef<typeof Component>(null);
    const { getTheme } = useTheme();
    const defaultTheme = getTheme('text.default');
    const variantTheme = getTheme(`text.variants.${variant}`);
    const rootClassName = cn(className, defaultTheme, variantTheme, {
      italic: italic,
      'font-bold': bold,
      underline: underline,
    });

    return (
      <Component ref={mergeRefs([ref, textRef])} className={rootClassName} {...rest}>
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';

export default Text;
