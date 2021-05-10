import 'twin.macro';
import React, { Fragment, memo } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { Popover, Transition } from '@headlessui/react';

interface Props {}

const MiniCart = (props: Props) => {
  return (
    <div>
      <Popover tw="relative">
        {({ open }) => (
          <>
            <Popover.Button as="div">
              <Button variant="link" size="sm" tw="flex">
                <Image
                  tw="hover:text-indigo-500"
                  src="/icons/shopping-cart.svg"
                  alt="cart icon"
                  height="20"
                  width="20"
                />
              </Button>
            </Popover.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel static>
                <div tw="absolute right-0 left-auto z-20 p-2 bg-white shadow-lg w-80 top-full">mini cart 2</div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default memo(MiniCart);
