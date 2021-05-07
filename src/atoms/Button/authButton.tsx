type Props = {
  label: string;
  onClick?: () => void;
};

export const AuthButton: React.VFC<Props> = ({ label, onClick }) => {
  return (
    <button className="border rounded border-gray-500" onClick={onClick}>
      {label}
    </button>
  );
};
