import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
};

function CheckBox({ className, label, ...props }: Props) {
  return (
    <label>
      <input {...props} />
      {label}
    </label>
  );
}

export default CheckBox;
