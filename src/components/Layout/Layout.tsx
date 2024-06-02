import React, { useMemo } from 'react';
import petbookyLogo from '../../assets/img/petbooky_logo.svg';
import profilePet from '../../assets/img/profile-pet.jpeg';
import {
  HomeIcon as SolidHome,
  BellIcon as SolidBell,
  PlusCircleIcon as SolidPlus,
} from '@heroicons/react/24/solid';
import {
  HomeIcon,
  BellIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import './layout.css';

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  const navItems = [
    { icon: HomeIcon, solidIcon: SolidHome, path: '/feed' },
    { icon: BellIcon, solidIcon: SolidBell, path: '/notifications' },
    { icon: PlusCircleIcon, solidIcon: SolidPlus, path: '/new-post' },
  ];
  return (
    <div className='pb-flex pb-flex-col pb-min-h-full pb-h-full pb-mx-auto'>
      <header className='pb-flex pb-justify-between pb-border-b pb-border-solid pb-px-6 pb-py-4 pb-border-b-neutral-50'>
        <div className='pb-flex pb-items-center pb-gap-4'>
          <img src={petbookyLogo} alt='logo' className='pb-h-8 pb-w-auto' />
          <button className='pb-h-fit'>
            <MoonIcon className='pb-h-7 pb-w-auto pb-text-brown-500' />
          </button>
        </div>
        <div className='pb-flex pb-px-3 pb-items-center pb-rounded-[10px] pb-bg-neutral-30'>
          <MagnifyingGlassIcon className='pb-h-6 pb-w-auto pb-text-neutral-100' />
          <input className='pb-min-w-96 pb-w-full pb-h-full pb-bg-transparent pb-outline-none focus-within:pb-outline-none' />
        </div>
        <nav className='pb-flex'>
          {navItems.map(({ path, icon: Icon, solidIcon: SolidIcon }) => (
            <NavLink
              to={path}
              className={({ isActive, isPending }) => {
                const defaultClass = 'pb-p-2';
                const active = isActive
                  ? 'pb-nav-item--active'
                  : 'pb-nav-item--default';
                return `${defaultClass} ${active}`;
              }}
            >
              <Icon className='pb-nav-item__outline' />
              <SolidIcon className='pb-nav-item__solid' />
            </NavLink>
          ))}
          <NavLink
            to='/profile'
            className={({ isActive, isPending }) => {
              return isActive ? 'pb-outline-1 pb-outline-orange-500' : '';
            }}
          >
            <img
              src={profilePet}
              alt='logo'
              className='pb-h-11 pb-w-11 pb-rounded-full pb-object-cover'
            />
          </NavLink>
        </nav>
      </header>
      <main className='pb-max-w-[1380px] pb-mx-auto'>{children}</main>
    </div>
  );
}

export default Layout;
