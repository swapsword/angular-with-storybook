import { type Meta, type StoryObj } from '@storybook/angular';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Input',
  component: InputComponent,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {},
};
