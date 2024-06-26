import React, { useEffect, useMemo, useState } from 'react';
import petbookyLogo from '../../assets/img/petbooky_logo.svg';
import cat from '../../assets/img/cat3.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

type LoginProps = {
  title: string;
  forgotPassword: string;
  btnLabel: string;
  noAccount: string;
  authenticateUser: (e?: React.MouseEvent<HTMLElement>) => void;
};

function Login({
  title,
  forgotPassword,
  btnLabel,
  noAccount,
  authenticateUser,
}: LoginProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(false);
  const noAccountParts = useMemo(() => {
    const sections = noAccount.split('+');

    return {
      section1: sections[0],
      section2: sections[1],
    };
  }, [noAccount]);

  useEffect(() => {
    setDisabledBtn(!userName || !password);
  }, [userName, password]);

  const changeUserName = (val: string) => {
    setUserName(val);
  };

  const changePassword = (val: string) => {
    setPassword(val);
  };

  return (
    <div className='pb-flex pb-flex-col pb-min-h-full pb-h-full pb-max-w-[1380px] pb-mx-auto pb-px-6 pb-py-4'>
      <header>
        <a href='/'>
          <img src={petbookyLogo} alt='logo' className='pb-h-8 pb-w-auto' />
        </a>
      </header>
      <main className='pb-flex pb-relative pb-flex-col pb-h-full pb-items-center'>
        <h1 className='pb-text-2xl pb-font-bold pb-text-neutral-500 pb-mt-24'>
          {title}
        </h1>
        <form className='pb-w-full pb-space-y-8 pb-mt-14 sm:pb-max-w-[592px]'>
          <Input
            value={userName}
            placeholder={'Correo electrónico o usuario'}
            onChange={changeUserName}
          />
          <div>
            <Input
              value={password}
              placeholder={'Contraseña'}
              type='password'
              onChange={changePassword}
            />
            <span className='pb-flex pb-justify-end pb-text-xs pb-mt-4 pb-text-neutral-100'>
              <a href='/password/reset/'>{forgotPassword}</a>
            </span>
          </div>
          <Button
            type='submit'
            size='medium'
            className='pb-w-full'
            disabled={disabledBtn}
            onClick={authenticateUser}
          >
            {btnLabel}
          </Button>
          <span className='pb-block pb-text-center pb-text-sm pb-text-neutral-500 pb-bg-white pb-bg-opacity-80'>
            {noAccountParts.section1}
            <span className='pb-text-orange-500 pb-font-bold'>
              <a href='/signup'>{noAccountParts.section2}</a>
            </span>
          </span>
        </form>
        <img
          src={cat}
          alt='logo'
          className='pb-h-40 pb-w-auto pb-absolute pb-bottom-0 pb-right-0 -pb-z-10'
        />
      </main>
    </div>
  );
}

export default Login;
