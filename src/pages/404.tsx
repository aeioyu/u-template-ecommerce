import { NextPage } from 'next';
import Layout from '@/components/layouts/AppLayout';

interface Props {}

const NotfoundPage: NextPage<Props> = () => {
  console.log('404');

  return <Layout>404 - Page Not Found</Layout>;
};

export default NotfoundPage;
