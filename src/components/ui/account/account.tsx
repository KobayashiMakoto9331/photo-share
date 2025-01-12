import { AccountItem, AccountItemProps } from "./account-item";

type AccountProps = {
  accounts: AccountItemProps[];
};

export const Account = ({ accounts }: AccountProps) => {
  if (accounts.length === 0) return null;

  return (
    <div className="p-4 border border-gray-200 rounded-xl">
      {accounts.map((account) => (
        <div
          className="w-full flex items-center py-4 border-b border-gray-200 last:border-b-0"
          key={account.id}
        >
          <AccountItem {...account} />
        </div>
      ))}
    </div>
  );
};
