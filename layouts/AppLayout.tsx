import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

interface Props {}

const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
