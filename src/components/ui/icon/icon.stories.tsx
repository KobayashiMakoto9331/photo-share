import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";

const meta = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["home", "image", "profile", "camera"],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "home",
  },
};
