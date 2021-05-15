import React from 'react';
import { Meta } from '@storybook/react';
import MegaMenu, { MegaMenuProps } from './MegaMenu';

export default {
  title: 'Commons/MegaMenu',
  component: MegaMenu,
  argTypes: {},
} as Meta;

const Template: React.VFC<MegaMenuProps> = (args) => <MegaMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
