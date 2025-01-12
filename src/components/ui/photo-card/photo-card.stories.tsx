import type { Meta, StoryObj } from "@storybook/react";
import { PhotoCard } from "./photo-card";

const meta = {
  title: "UI/PhotoCard",
  component: PhotoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PhotoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl:
      "http://shincode.info/wp-content/uploads/2021/12/nextjs15-new-hooks-shincode-camp.png",
    title: "Next.js 15: New Hooks",
    description: "Learn about the new hooks in Next.js 15",
    size: "medium",
  },
};
