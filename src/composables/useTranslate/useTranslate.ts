import { useIntl } from 'react-intl';

function useTranslate() {
  const { formatMessage } = useIntl();
  const t = (id: string): string => formatMessage({ id });

  return {
    t,
  };
}

export default useTranslate;
