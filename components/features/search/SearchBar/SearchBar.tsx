import Button from '@/components/common/Button';
import useTranslate from '@/composables/useTranslate';
import React from 'react';

interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  const { t } = useTranslate();
  return (
    <div className="flex">
      <div className="flex-auto">
        <div className="border-2 border-black">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full p-2 border-0 outline-none ring-0 ring-offset-0"
          />
        </div>
      </div>
      <div className="flex-initial mx-1">
        <Button variant="primary" size="lg" className="w-40">
          {t('search')}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
