import React from 'react';
import { Meta } from '@storybook/react';
import Button, { Props } from './Button';

export default {
  title: 'Commons/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: React.VFC<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example',
};
