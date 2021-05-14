import React from 'react';
import { Meta } from '@storybook/react';
import Text, { Props } from './Text';

export default {
  title: 'Commons/Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: React.VFC<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Typography Example',
};
