import 'twin.macro';
import React from 'react';
import Container from '@/components/common/Container';
import Text from '@/components/common/Text';

const Footer: React.FC = () => {
  return (
    <div tw="bg-lightGray">
      <Container>
        <div tw="py-1 text-center">
          <Text tw="text-gray">copyright © 2021</Text>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
