import Layout from '@/layouts/AppLayout';
import { NextPage } from 'next';

interface Props {}

const NotfoundPage: NextPage<Props> = () => {
  return <Layout>404 - Page Not Found</Layout>;
};

export default NotfoundPage;
