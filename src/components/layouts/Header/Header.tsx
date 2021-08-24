import { BellIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="fixed right-0 z-20 flex h-16 align-middle left-60 glassmorphism">
      <div className="flex justify-between flex-1 px-4 align-middle md:px-0">
        {/* <div className="flex items-center h-16 pl-6 align-middle w-60">
          <Logo />
        </div> */}
        <div className="flex flex-1 pl-8">
          <form className="flex w-full sm:w-2/5 md:ml-0" action="#" method="GET">
            <label htmlFor="mobile-search-field" className="sr-only">
              Search
            </label>
            <label htmlFor="desktop-search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              </div>
              <input
                name="mobile-search-field"
                id="mobile-search-field"
                className="w-full h-full py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 bg-transparent border-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                placeholder="Search"
                type="search"
              />
              <input
                name="desktop-search-field"
                id="desktop-search-field"
                className="hidden w-full h-full py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 bg-transparent border-transparent focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                placeholder="Search jobs, applicants, and more"
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center ml-4 md:ml-6">
          <button
            type="button"
            className="p-1 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <BellIcon className="w-6 h-6" aria-hidden="true" />
            <span className="sr-only">View notifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
