import Logo from '@/components/ui/Logo';
import NavMenu from '@/components/ui/NavMenu/NavMenu';
import { menus } from '@/data/menu';
import React from 'react';

const Aside: React.FC = () => {
  return (
    <aside className="flex w-full h-screen overflow-hidden bg-white">
      <div className="flex flex-col w-full">
        <div className="flex items-center h-16 pl-6">
          <Logo />
        </div>
        <div className="mt-5 overflow-y-auto">
          <NavMenu menus={menus} />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
