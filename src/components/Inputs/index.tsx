import { twMerge } from "tailwind-merge";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
};

function Input({ className, label, ...props }: Props) {
  return (
    <div className={twMerge("w-full", className)}>
      {label && <label className='text-sm'>{label}</label>}
      <input
        className='h-[50px] w-full rounded-md bg-gray-300 p-2.5 ps-4 outline-none focus:border-2 focus:border-gray-300 focus:bg-white'
        {...props}
      />
    </div>
  );
}

export default Input;
