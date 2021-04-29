import React from 'react';
import LanguageSwitch from '@/components/common/LanguageSwitch';
import { useIntl } from 'react-intl';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import useLocale from '@/composables/useLocale';
import s from './Header.module.css';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const { locale, switchLanguage } = useLocale();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerLayout}>
          <div className="mr-4 text-h4">Walmart</div>
          <div className="flex-auto">
            {formatMessage({ id: 'h1' })}
            <Button color="primary" rounded size="sm">
              Add To Cart
            </Button>
          </div>
          <div className="">
            <LanguageSwitch locale={locale} onLanguageChange={switchLanguage} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
