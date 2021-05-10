import 'twin.macro';
import React, { Fragment } from 'react';
import Link from 'next/link';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import SearchBar from '@/components/features/search/SearchBar';
import MiniCart from '@/components/features/cart/MiniCart';
import { useUIState } from '@/components/UIStateProvider';
import MegaMenu from '@/components/features/search/MegaMenu';
import useLocale from '@/composables/useLocale';
import useUser from '@/composables/useUser';
import useAuth from '@/composables/useAuth';
import useCategories from '@/composables/useCategories';

const Header: React.FC = () => {
  const { locale, switchLanguage } = useLocale();
  const { openModal, setModalView } = useUIState();
  const { categories } = useCategories();
  const { user, isLogedIn } = useUser();
  const { logout } = useAuth();

  const LogedInBar: React.FC = () => (
    <div tw="flex items-center">
      <Text>{user?.data?.name}</Text>
      <Button variant="link" tw="p-0 hover:underline" onClick={() => logout.mutate()}>
        <Text variant="caption">Logout</Text>
      </Button>
    </div>
  );

  const NonLogedInBar: React.FC = () => (
    <>
      <Button variant="link" tw="hover:underline" onClick={() => [setModalView('SIGNUP_VIEW'), openModal()]}>
        <Text variant="caption">Register</Text>
      </Button>
      <Text variant="caption" tw="text-gray">
        |
      </Text>
      <Button variant="link" tw="hover:underline" onClick={() => [setModalView('LOGIN_VIEW'), openModal()]}>
        <Text variant="caption">Login</Text>
      </Button>
    </>
  );

  return (
    <header tw="text-black bg-white">
      <div tw="border-b border-lightGray" style={{ height: 41 }}>
        <Container>
          <div tw="flex justify-between">
            <div tw="flex items-center">
              <LanguageSwitch locale={locale} onLanguageChange={switchLanguage} />
            </div>
            <div tw="flex items-center">
              <div tw="mx-2">{isLogedIn ? <LogedInBar /> : <NonLogedInBar />}</div>
              <MiniCart />
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div tw="flex justify-between py-4 align-middle border-b border-lightGray">
            <div tw="flex items-center flex-initial mr-4">
              <Link href="/">
                <Text variant="heading1" tw="cursor-pointer">
                  uStore
                </Text>
              </Link>
            </div>
            <div tw="flex items-center flex-initial mx-6" />
            {/* <div tw="flex items-center flex-initial mx-6">
              <Text variant="heading6">
                Shop by <br /> Category
              </Text>
            </div> */}
            <div tw="items-center flex-auto">
              <SearchBar />
            </div>
            <div tw="flex items-center flex-initial">
              <Button variant="link" size="sm">
                <Text variant="caption" tw="text-gray">
                  Advanced
                </Text>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <nav>
        <Container>
          <MegaMenu categories={categories?.data} />
        </Container>
      </nav>
    </header>
  );
};

export default Header;
