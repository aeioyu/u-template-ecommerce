import Button from '@/components/common/Button';
import React from 'react';

const Footer: React.FC = (props) => {
  return (
    <div>
      {' '}
      <Button color="dark" disabled loading>
        Sign Up
      </Button>
    </div>
  );
};

export default Footer;
