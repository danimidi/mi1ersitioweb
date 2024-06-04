import React, { SVGProps } from 'react';

type InputProps = {
  placeholder?: string;
  type?: string;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

function Input({ placeholder, type = 'text', icon: Icon }: InputProps) {
  return (
    <div className='pb-h-[54px] pb-px-2.5 pb-rounded-[10px] pb-border pb-border-neutral-50 pb-bg-white focus-within:pb-border-orange-500'>
      <input
        placeholder={placeholder}
        className='pb-h-full pb-w-full pb-outline-none pb-text-sm focus-visible:pb-outline-none'
        type={type}
      />
      {!!Icon && <Icon className='pb-w-6 pb-h-6' onClick={() => {}} />}
    </div>
  );
}

export default Input;
