import React from 'react';

import Text from '../Text';
import NavMenuItem from './NavMenuItem';

export interface Props {
  menus: MenuItem[];
}

export type MenuItem = {
  name: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  current?: boolean;
  href?: string;
  group?: MenuItem[];
  children?: {
    name: string;
    href: string;
  }[];
};

const NavMenu: React.FC<Props> = ({ menus }) => {
  return (
    <nav className="px-2 space-y-1">
      {menus.map((item) =>
        !item.group ? (
          <NavMenuItem key={item.name} item={item} />
        ) : (
          <div className="mb-6" key={item.name}>
            <div className="pl-4 mb-4">
              <Text variant="text-caption" className="opacity-60">
                {item.name}
              </Text>
            </div>
            {item.group.map((groupItem) => (
              <NavMenuItem key={groupItem.name} item={groupItem} />
            ))}
          </div>
        ),
      )}
    </nav>
  );
};

export default NavMenu;
