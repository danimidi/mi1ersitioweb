import React, { useMemo } from 'react';
import petbookyLogo from '../../assets/img/petbooky_logo.svg';

type HomeProps = {
  title: string;
  forgotPassword: string;
  btnLabel: string;
  noAccount: string;
};

function Login({ title, forgotPassword, btnLabel, noAccount }: HomeProps) {
  return (
    <div className='pb-flex pb-flex-col pb-min-h-full pb-h-full pb-max-w-[1380px] pb-mx-auto pb-px-6 pb-py-4'>
      <header>
        <img src={petbookyLogo} alt='logo' className='pb-h-8 pb-w-auto' />
      </header>
      <main className='pb-flex pb-relative pb-flex-col pb-h-full pb-items-center'></main>
    </div>
  );
}

export default Login;
