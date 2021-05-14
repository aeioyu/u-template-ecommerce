import React, { forwardRef, ReactNode, ButtonHTMLAttributes, JSXElementConstructor, useRef, useCallback } from 'react';
import cn from 'clsx';
import mergeRefs from 'react-merge-refs';
import { useTheme } from '@/components/ThemeProvider';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark' | 'link';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingComponent?: ReactNode;
  as?: string | JSXElementConstructor<any>;
}

const Button: React.FC<Props> = forwardRef(
  (
    {
      block = false,
      children,
      className,
      variant = 'primary',
      disabled = false,
      outline = false,
      rounded = false,
      size = 'md',
      loading = false,
      as: Component = 'button',
      loadingComponent = 'loading..',
      ...rest
    },
    buttonRef,
  ) => {
    const ref = useRef<typeof Component>(null);
    const { getTheme } = useTheme();
    const style = getTheme('button');
    const colors = useCallback((outline: boolean) => {
      return {
        primary: outline ? style.variant.primary.outline : style.variant.primary.bg,
        success: outline ? style.variant.success.outline : style.variant.success.bg,
        danger: outline ? style.variant.danger.outline : style.variant.danger.bg,
        dark: outline ? style.variant.dark.outline : style.variant.dark.bg,
        warning: outline ? style.variant.warning.outline : style.variant.warning.bg,
        indigo: outline ? style.variant.indigo.outline : style.variant.indigo.bg,
        link: style.variant.link.bg,
      };
    }, []);

    const rootClassName = cn(
      className,
      style.sizes[size],
      {
        [style.block]: block,
        [style.disabled]: disabled,
        [style.rounded]: rounded,
        [colors(outline)[variant]]: variant,
      },
      style.default,
    );

    return (
      <Component ref={mergeRefs([ref, buttonRef])} disabled={disabled} className={rootClassName} {...rest}>
        {children}
        {loading && loadingComponent}
      </Component>
    );
  },
);

Button.displayName = 'Button';

export default Button;
