import React, { useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  open?: boolean;
  onClose?: () => {};
}

const Modal: React.FC<Props> = ({ children, size = 'md', open = false, onClose }) => {
  const completeButtonRef = useRef();
  const [isOpen, setIsOpen] = useState(open);
  const handleOnCloseClick = () => [setIsOpen(false), onClose?.()];

  useEffect(() => {
    return setIsOpen(open);
  }, [open]);

  return (
    // Use the `Transition` component + show prop to add transitions.
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        initialFocus={completeButtonRef}
        open={isOpen}
        onClose={handleOnCloseClick}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="z-40 flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 z-30 bg-black opacity-30" />
          <div className="relative z-30 mx-auto bg-white rounded p-7">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 outline-none focus:outline-none"
              ref={completeButtonRef}
              onClick={handleOnCloseClick}
            >
              <Image src="/icons/close.svg" width="16" height="16" />
            </button>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
