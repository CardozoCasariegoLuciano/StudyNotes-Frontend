import Logo from './Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    margin: '40px',
    size: 2,
    inLine: true,
    style: { cursor: 'pointer' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const InlineLarge: Story = {
  args: {
    size: 1,
    inLine: true,
  },
};
export const InlineMedium: Story = {
  args: {
    size: 2,
    inLine: true,
  },
};
export const InlineSmall: Story = {
  args: {
    size: 3,
    inLine: true,
  },
};
export const BreackLarge: Story = {
  args: {
    size: 1,
    inLine: false,
  },
};
export const BreackMedium: Story = {
  args: {
    size: 2,
    inLine: false,
  },
};
export const BreackSmall: Story = {
  args: {
    size: 3,
    inLine: false,
  },
};
