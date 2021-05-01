import React from 'react';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import useLocale from '@/composables/useLocale';
import Text from '@/components/common/Text';
import SearchBar from '@/components/features/search/SearchBar';
import MiniCart from '@/components/features/cart/MiniCart';

const Header: React.FC = () => {
  const { locale, switchLanguage } = useLocale();

  return (
    <header className="text-black bg-white shadow-sm">
      <div className="border-b border-lightGray">
        <Container>
          <div className="flex justify-between">
            <div className="flex items-center">
              <LanguageSwitch locale={locale} onLanguageChange={switchLanguage} />
            </div>
            <div className="flex items-center">
              <div className="mx-2">
                <Text as="a" variant="caption" className="text-black hover:underline" href="https://google.com">
                  Register
                </Text>
                <Text variant="caption" className="mx-2 text-gray">
                  |
                </Text>
                <Text as="a" variant="caption" className="text-black hover:underline" href="https://google.com">
                  Login
                </Text>
              </div>
              <MiniCart />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-between py-4 align-middle">
          <div className="flex items-center flex-initial mr-4">
            <Text variant="heading1">ebay</Text>
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
