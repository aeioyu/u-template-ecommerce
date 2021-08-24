import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, DocumentIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '../Text';
import { MenuItem } from './NavMenu';

export interface Props {
  item: MenuItem;
}

const NavMenuItem: React.FC<Props> = ({ item }): JSX.Element => {
  const { pathname } = useRouter();
  const isActive = item?.href && item?.href === pathname;
  const isChildrenActive =
    item?.children && item?.children?.some((child) => child.href === pathname);
  const activeStyle = isActive
    ? ' text-blue-600 '
    : ' text-gray-600  hover:text-gray-900';

  return !item.children ? (
    <div key={item.name}>
      <Link href={item.href || ''} scroll>
        <a
          className={clsx(
            activeStyle,
            'group w-full flex items-center pl-4 py-3 text-sm rounded-md cursor-pointer',
          )}
        >
          {item.icon ? (
            <item.icon className={clsx(activeStyle, 'mr-3 flex-shrink-0 h-5 w-5')} />
          ) : (
            <DocumentIcon className={clsx(activeStyle, 'mr-3 flex-shrink-0 h-5 w-5')} />
          )}
          <Text variant="text-subtitle" className={clsx(activeStyle, 'flex-1')}>
            {item.name}
          </Text>
        </a>
      </Link>
    </div>
  ) : (
    <Disclosure as="div" key={item.name} defaultOpen={isChildrenActive}>
      {({ open }) => (
        <div className="group">
          <Disclosure.Button
            className={clsx(
              'group w-full flex items-center pl-4 pr-1 py-3 text-left rounded-lg focus:outline-none',
            )}
          >
            {item.icon ? (
              <item.icon className={clsx('mr-3 flex-shrink-0 h-5 w-5')} />
            ) : (
              <DocumentIcon className={clsx('mr-3 flex-shrink-0 h-5 w-5')} />
            )}
            <Text variant="text-subtitle" className="flex-1">
              {item.name}
            </Text>
            <ChevronDownIcon
              className={clsx(
                open ? 'rotate-180' : '',
                'h-4 w-4 text-gray-600 transform ease-in-out duration-150 transition-all',
              )}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="py-1">
            {item.children.map((subItem) => (
              <Link href={subItem.href || ''} key={subItem.name} scroll>
                <a
                  className={clsx(
                    'text-blue-600',
                    'flex w-full py-2 pl-12 pr-2 text-gray-600 rounded-md text-body ',
                  )}
                >
                  <Text>{subItem.name}</Text>
                </a>
              </Link>
            ))}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default NavMenuItem;
