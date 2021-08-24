import PushOver from '@/components/ui/PushOver';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import React, { useState } from 'react';

import Aside from './Aside/Aside';
import Content from './Content/Content';
import Header from './Header/Header';

const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-theme">
      <div className="hidden md:flex md:flex-shrink-0 w-60">
        <Aside />
      </div>

      <PushOver open={sidebarOpen} onSidebarCloseClick={() => setSidebarOpen(false)}>
        <Aside />
      </PushOver>

      <Header />

      <Content>
        <button
          type="button"
          className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
        </button>
        {children}
      </Content>
    </div>
  );
};

export default Layout;
