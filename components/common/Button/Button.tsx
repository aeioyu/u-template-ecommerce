import React, { forwardRef, ReactNode, ButtonHTMLAttributes, Ref } from 'react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
  loading?: boolean;
  loadingComponent?: ReactNode;
}

const style = {
  default: `text-white focus:outline-none shadow font-medium transition ease-in duration-200`,
  block: `flex justify-center w-full`,
  rounded: `rounded-full`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3 text-lg',
  },
  color: {
    primary: {
      bg: `bg-lightBlue focus:ring-2 focus:ring-offset-2 focus:ring-blue focus:ring-offset-blue hover:bg-blue`,
      outline: `border-blue-700 border-2 text-blue-700 active:bg-blue-700 active:text-white`,
    },
    success: {
      bg: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-200`,
      outline: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
    },
    danger: {
      bg: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-200`,
      outline: `border-red-600 border-2 text-red-600 active:bg-red-600 active:text-white`,
    },
    dark: {
      bg: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-200`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    warning: {
      bg: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-200`,
      outline: `border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white`,
    },
    indigo: {
      bg: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-200`,
      outline: `border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white`,
    },
  },
};

const colors = (outline: boolean): Record<string, string> => ({
  primary: outline ? style.color.primary.outline : style.color.primary.bg,
  success: outline ? style.color.success.outline : style.color.success.bg,
  danger: outline ? style.color.danger.outline : style.color.danger.bg,
  dark: outline ? style.color.dark.outline : style.color.dark.bg,
  warning: outline ? style.color.warning.outline : style.color.warning.bg,
  indigo: outline ? style.color.indigo.outline : style.color.indigo.bg,
});

const Button: React.FC<BtnProps> = forwardRef((props, ref: Ref<HTMLButtonElement>) => {
  const {
    block = false,
    children,
    className = '',
    color,
    disabled = false,
    outline,
    rounded = '',
    size = 'md',
    submit,
    loading = false,
    loadingComponent = 'loading..',
    ...rest
  } = props;
  return (
    <button
      ref={ref}
      {...rest}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={`${className} ${block ? style.block : ''}
        ${disabled ? style.disabled : ''} ${style.sizes[size]} 
        ${style.default} ${rounded ? style.rounded : rounded}
        ${color ? colors(outline)[color] : colors(outline).dark}`}
    >
      {children}
      {loading && loadingComponent}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
