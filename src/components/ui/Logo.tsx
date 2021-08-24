import React from 'react';

import Text from './Text';

const Logo: React.FC = () => {
  return (
    <div className="font-bold text-left">
      <Text variant="text-heading-3" className="logo">
        <span className="iris">Iris</span>Glass
      </Text>
    </div>
  );
};

export default Logo;
