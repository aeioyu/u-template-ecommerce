import { NextRouter, useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const COOKIE_NAME = 'NEXT_LOCALE';

interface UseLocalReturnType {
  switchLanguage: (string) => void;
  locale: string;
}

function useLocale(): UseLocalReturnType {
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);
  const router: NextRouter = useRouter();
  const { locale, asPath } = router;

  const switchLanguage = (selectedLocale: string): void => {
    router.push(asPath, asPath, { locale: selectedLocale });

    if (cookie.NEXT_LOCALE !== selectedLocale) {
      setCookie(COOKIE_NAME, selectedLocale, { path: '/' });
    }
  };

  return {
    switchLanguage,
    locale,
  };
}

export default useLocale;
