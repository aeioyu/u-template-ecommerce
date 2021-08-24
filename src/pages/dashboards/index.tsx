import Layout from '@/components/layouts/Layout';
import Stats from '@/components/ui/Stats';
import Table from '@/components/ui/Table';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <section>
        {/* <div className="glassmorphism">aaaa</div> */}
        <div className="mb-4">
          <Stats />
        </div>
        Dashboard
        <Table />
      </section>
    </Layout>
  );
};

export default Dashboard;
