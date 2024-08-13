import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  label: string;
};

function Select({ label, className }: Props) {
  return (
    <div className={twMerge('flex w-full flex-col', className)}>
      <label className="text-sm">{label}</label>
      <select className="w-full rounded-md bg-gray-300 p-2.5 ps-4 outline-none focus:border-2 focus:border-gray-300 focus:bg-white">
        <option>yeah</option>
        <option>yeah</option>
        <option>yeah</option>
        <option>yeah</option>
      </select>
    </div>
  );
}

export default Select;
