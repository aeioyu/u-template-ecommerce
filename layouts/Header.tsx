import React from 'react';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import useLocale from '@/composables/useLocale';
import Text from '@/components/common/Text';
import SearchBar from '@/components/features/search/SearchBar';
import MiniCart from '@/components/features/cart/MiniCart';
import Link from 'next/link';
import { useUIState } from '@/components/UIStateProvider';

const Header: React.FC = () => {
  const { locale, switchLanguage } = useLocale();
  const { openModal, setModalView } = useUIState();

  return (
    <header className="text-black bg-white">
      <div className="border-b border-lightGray">
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center">
              <LanguageSwitch locale={locale} onLanguageChange={switchLanguage} />
            </div>
            <div className="flex items-center">
              <div className="mx-2">
                <Button
                  variant="link"
                  className="hover:underline"
                  onClick={() => [setModalView('SIGNUP_VIEW'), openModal()]}
                >
                  <Text variant="caption">Register</Text>
                </Button>
                <Text variant="caption" className="text-gray">
                  |
                </Text>
                <Button
                  variant="link"
                  className="hover:underline"
                  onClick={() => [setModalView('LOGIN_VIEW'), openModal()]}
                >
                  <Text variant="caption">Login</Text>
                </Button>
              </div>
              <MiniCart />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-between py-4 align-middle border-b border-lightGray">
          <div className="flex items-center flex-initial mr-4">
            <Link href="/">
              <Text variant="heading1" className="cursor-pointer">
                ebay
              </Text>
            </Link>
          </div>
          <div className="flex items-center flex-initial mx-6">
            <Text variant="heading6">
              Shop by <br /> Category
            </Text>
          </div>
          <div className="items-center flex-auto">
            <SearchBar />
          </div>
          <div className="flex items-center flex-initial">
            <Button variant="link" size="sm">
              <Text variant="caption" className="text-gray">
                Advanced
              </Text>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
