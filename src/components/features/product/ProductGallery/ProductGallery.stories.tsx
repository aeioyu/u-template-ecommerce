import React from 'react';
import { Meta } from '@storybook/react';
import ProductGallery, { ProductGalleryProps } from './ProductGallery';

export default {
  title: 'Commons/ProductGallery',
  component: ProductGallery,
  argTypes: {},
} as Meta;

const Template: React.VFC<ProductGalleryProps> = (args) => <ProductGallery {...args} />;

export const Default = Template.bind({});
Default.args = {};
