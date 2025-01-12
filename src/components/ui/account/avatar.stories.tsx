import type { Meta, StoryObj } from "@storybook/react";
import { Account } from "./account";

const meta = {
  title: "UI/Account",
  component: Account,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Account>;

export default meta;
type Story = StoryObj<typeof meta>;

const account = {
  id: "1",
  name: "John Doe",
  avatar: {
    src: "https://static.dpub.jp/image/division/144x144i/DP_PH-N4bTE5RAWZRVEfDb.png",
  },
};

export const Default: Story = {
  args: {
    accounts: [account, { ...account, id: "2" }, { ...account, id: "3" }],
  },
};
