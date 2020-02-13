import React, { useState } from 'react';
import ActiveLink from '../../util/ActiveLink';
import '../../styles/index.css';

const navbar = props => {
  const [isOpen, setOpen] = useState(false);
  const navItems = [
    { link: '/', name: 'Projects' },
    { link: '/about', name: 'About' }
  ];
  return (
    <header className="block w-full">
      <div className="flex z-20">
        <div className="w-1/2 px-5 py-3 md:px-12 md:py-5">
          <ActiveLink href="/">
            <a className="flex font-bold text-2xl">Jt.</a>
          </ActiveLink>
        </div>
        <div className="w-1/2 py-4 md:py-8 md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="flex text-gray-500 hover:text-white focus:text-white p-2 focus:outline-none z-50 right-0 fixed pr-10 md:pr-10"
          >
            <div
              className={`hamburger mt-0 text-right ${
                isOpen === true ? 'is-active' : null
              }`}
              id="hamburger-6"
            >
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </div>
        <div className="hidden md:block w-1/2 px-5 py-3 md:px-12 md:py-8 text-right">
          {navItems.map(items => {
            return (
              <ActiveLink
                key={items.name}
                activeClassName=""
                href={`${items.link}`}
              >
                <a
                  className="text-black-200 font-medium ml-16 font-sub"
                  onClick={() => setOpen(!isOpen)}
                >
                  {items.name}
                </a>
              </ActiveLink>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default navbar;
