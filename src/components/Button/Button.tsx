import React, { SVGProps } from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

function Button({
  children,
  type = 'button',
  icon: Icon,
  size = 'medium',
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(className, {
        'pb-font-semibold pb-text-white pb-bg-orange-500 hover:pb-bg-brown-200':
          true,
        'pb-text-sm pb-p-3 pb-rounded-[10px]': size === 'medium',
        'pb-text-base pb-p-4 pb-rounded-[10px]': size === 'medium',
        'pb-text-2xl pb-p-4 pb-rounded-xl': size === 'large',
      })}
    >
      {children}
    </button>
  );
}

export default Button;
