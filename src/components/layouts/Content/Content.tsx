import React from 'react';

const Content: React.FC = ({ children }) => {
  return (
    <div className="relative flex-1 px-4 pt-16 overflow-y-auto md:px-8">{children}</div>
  );
};

export default Content;
