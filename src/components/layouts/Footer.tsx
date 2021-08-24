import React from 'react';
import Container from '@/components/common/Container';
import Text from '@/components/common/Text';

const Footer: React.FC = () => {
  return (
    <div className="bg-lightGray">
      <Container>
        <div className="py-1 text-center">
          <Text className="text-gray">copyright © 2021</Text>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
