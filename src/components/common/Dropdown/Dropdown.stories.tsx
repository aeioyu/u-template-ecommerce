import React from 'react';
import { Meta } from '@storybook/react';
import Dropdown, { Props } from './Dropdown';

export default {
  title: 'Commons/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: React.VFC<Props> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example',
};
