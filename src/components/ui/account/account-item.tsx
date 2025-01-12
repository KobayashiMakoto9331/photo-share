import { Avatar, AvatarProps } from "@/components/ui/avatar/avatar";

export type AccountItemProps = {
  id: string;
  name: string;
  avatar?: AvatarProps;
};

export const AccountItem = ({ name, avatar }: AccountItemProps) => {
  return (
    <div className="flex gap-3 w-full items-center">
      <Avatar {...avatar} />
      <div>{name && <p>{name}</p>}</div>
    </div>
  );
};
