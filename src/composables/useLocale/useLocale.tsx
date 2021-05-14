import { LOCALE_COOKIE } from '@/configs/cookie.config';
import { NextRouter, useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

interface UseLocalReturnType {
  switchLanguage: (string) => void;
  locale: string;
}

function useLocale(): UseLocalReturnType {
  const [cookie, setCookie] = useCookies([LOCALE_COOKIE]);
  const router: NextRouter = useRouter();
  const { locale, asPath } = router;

  const switchLanguage = (selectedLocale: string): void => {
    router.push(asPath, asPath, { locale: selectedLocale });

    if (cookie[LOCALE_COOKIE] !== selectedLocale) {
      setCookie(LOCALE_COOKIE, selectedLocale, { path: '/' });
    }
  };

  return {
    switchLanguage,
    locale,
  };
}

export default useLocale;
