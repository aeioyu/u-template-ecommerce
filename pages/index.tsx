import Layout from '@/layouts/AppLayout';
import { GetServerSideProps, NextPage } from 'next';
import { FormattedMessage } from 'react-intl';

interface Props {
  config: string;
}

const Home: NextPage<Props> = ({ config }) => {
  // const { formatMessage } = useIntl();
  // const f = (id) => formatMessage({ id });

  return (
    <Layout>
      {config}
      <FormattedMessage id="title" />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      config: 'a',
    },
  };
};

export default Home;
