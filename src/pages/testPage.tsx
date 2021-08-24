// import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Container from '@/components/common/Container';
import Layout from '@/components/layouts/AppLayout';
import Seo from '@/components/common/Seo';
// import useProductSearch from '@/composables/useProductSearch';
import { memo } from 'react';

const selectSlugIdFromUrl = (slug: string | string[]): string => {
  const slugArray = (slug as string[])?.join('/')?.split('-') || [];
  const slugId = slugArray[slugArray.length - 1];

  return slugId || '';
};

const TestPage: NextPage = (props) => {
  // const { query } = useRouter();
  // const categoryID = selectSlugIdFromUrl(query?.slug);
  // const { data: products } = useProductSearch(
  //   {
  //     page: 1,
  //     per_page: 10,
  //     category: categoryID,
  //   },
  //   {
  //     enabled: !!categoryID,
  //   },
  // );

  return (
    <div>
      <Seo title={`Category page`} description="description" />
      <Container>
        test
        {/* <div>Url {categoryID}</div> */}
        {/* {products?.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))} */}
      </Container>
    </div>
  );
};

(TestPage as any).Layout = Layout;

export default TestPage;
