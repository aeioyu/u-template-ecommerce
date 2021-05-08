import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import React from 'react';

const Footer: React.FC = (props) => {
  return (
    <div>
      <Container>
        <Button color="dark" disabled loading>
          Sign Up
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
