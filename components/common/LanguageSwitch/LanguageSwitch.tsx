import React from 'react';

interface Props {
  locale: string;
  onLanguageChange: (string) => unknown;
}

const LanguageSwitch: React.FC<Props> = ({ locale, onLanguageChange }) => {
  return (
    <select className="text-black text-body" onChange={(e) => onLanguageChange(e.target.value)} defaultValue={locale}>
      <option value="th">TH</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitch;
