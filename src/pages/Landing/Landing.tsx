import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import petbookyLogo from '../../assets/img/petbooky_logo.svg';
import './landing.css';
import petsKawaii from '../../assets/img/pets-kawaii.svg';
import landingBg from '../../assets/img/luna1.jpg';

type LandingProps = {
  subtitle: string;
  description: string;
  btnLabel: string;
  onJoinMe: () => void;
  onGoLogin: () => void;
};

const Landing = ({
  subtitle,
  description,
  btnLabel,
  onJoinMe,
  onGoLogin,
}: LandingProps) => {
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
      <main className='pb-px-8 pb-pb-8 pb-flex pb-flex-col pb-items-center'>
        <img src={petbookyLogo} alt='logo' className='pb-h-auto pb-mt-11' />
        <section className='pb-flex pb-flex-col pb-items-center pb-mt-5'>
          <h1 className='pb-text-3xl pb-text-center pb-font-racing pb-text-neutral-200'>
            {subtitle}
          </h1>
          <img src={petsKawaii} alt='logo' className='pb-w-72 pb-h-auto' />
          <div className='pb-px-4 pb-py-6 pb-bg-white pb-bg-opacity-50 pb-rounded-2xl'>
            <h2 className='pb-text-center pb-text-xl pb-font-bold pb-text-brown-200'>
              {description}
            </h2>
          </div>
          <button className='pb-w-4/5 pb-p-4 pb-mt-5 pb-rounded-xl pb-text-2xl pb-font-semibold pb-text-white pb-bg-orange-500'>
            {btnLabel}
          </button>
        </section>
      </main>
      <footer></footer>
      <div
        className='pb-absolute pb-top-0 pb-left-0 -pb-z-10 pb-w-full pb-h-full pb-bg-landing pb-bg-cover pb-opacity-40 landing-bg--position sm:pb-bg-center'
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>
    </div>
  );
};

export default Landing;
