import InputWithLabel from '@/components/forms/InputWithLabel';
import Layout from '@/components/layouts/Layout';
import SubHeader from '@/components/ui/SubHeader';
import Table from '@/components/ui/Table';
import Text from '@/components/ui/Text';
import { NextPage } from 'next';
import React from 'react';

const ListingTable: NextPage = () => {
  return (
    <Layout>
      <section className="mt-4">
        <SubHeader />
        <div className="grid grid-cols-3 gap-4 my-6">
          <InputWithLabel />
          <InputWithLabel />
          <InputWithLabel />
        </div>

        <Table />
      </section>
    </Layout>
  );
};

export default ListingTable;
