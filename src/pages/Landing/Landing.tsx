import React, { useMemo } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import petbookyLogo from '../../assets/img/petbooky_logo.svg';
import './landing.css';
import petsKawaii from '../../assets/img/pets-kawaii.svg';
import landingBg from '../../assets/img/luna1.jpg';
import Button from '../../components/Button';

type LandingProps = {
  subtitle: string;
  description: string;
  btnLabel: string;
  goLoginText: string;
  onJoinMe: () => void;
  onGoLogin: () => void;
};

const Landing = ({
  subtitle,
  description,
  btnLabel,
  goLoginText,
  onJoinMe,
  onGoLogin,
}: LandingProps) => {
  const loginParts = useMemo(() => {
    const sections = goLoginText.split('+');

    return {
      section1: sections[0],
      section2: sections[1],
    };
  }, [goLoginText]);

  return (
    <div className='pb-min-h-full pb-h-fit pb-relative '>
      <header className='pb-p-3'>
        <nav className='pb-flex pb-justify-end pb-text-sm'>
          <button className='pb-px-3 pb-py-1 pb-font-medium pb-text-neutral-500 hover:pb-bg-orange-100 hover:pb-text-orange-500'>
            Login
          </button>
          <button className='pb-flex pb-gap-1 pb-items-center pb-px-2 pb-py-1 pb-font-medium pb-text-neutral-500 hover:pb-bg-orange-100 hover:pb-text-orange-500'>
            <GlobeAltIcon className='pb-h-4 pb-w-4' />
            Español
          </button>
        </nav>
      </header>
      <main className='pb-px-8 pb-pb-8 pb-flex pb-flex-col pb-items-center md:pb-px-10'>
        <img
          src={petbookyLogo}
          alt='logo'
          className='pb-h-auto pb-mt-11 md:pb-w-4/5 md:pb-h-auto lg:pb-max-w-[1000px]'
        />
        <section className='pb-flex pb-flex-col pb-items-center pb-mt-5'>
          <h1 className='pb-text-3xl pb-text-center pb-font-racing pb-text-neutral-200 md:pb-text-4xl lg:pb-text-5xl'>
            {subtitle}
          </h1>
          <img src={petsKawaii} alt='logo' className='pb-w-72 pb-h-auto' />
          <div className='pb-px-4 pb-py-6 pb-bg-white pb-bg-opacity-30 pb-rounded-2xl'>
            <h2 className='pb-text-center pb-text-xl pb-font-bold pb-text-brown-200'>
              {description}
            </h2>
          </div>

          <Button
            size='large'
            className='pb-w-4/5 pb-mt-5 sm:pb-max-w-72 md:pb-mt-7'
          >
            {btnLabel}
          </Button>

          <span className='pb-text-sm pb-font-medium pb-mt-2.5 pb-text-neutral-500'>
            {loginParts.section1}
            <span className='pb-underline pb-text-orange-500'>
              <a href='/login'> {loginParts.section2}</a>
            </span>
          </span>
        </section>
      </main>
      <footer></footer>
      <div
        className='pb-absolute pb-top-0 pb-left-0 -pb-z-10 pb-w-full pb-h-full pb-bg-landing pb-bg-cover pb-opacity-25 landing-bg--position sm:pb-bg-center'
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>
    </div>
  );
};

export default Landing;
