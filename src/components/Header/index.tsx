import { twMerge } from 'tailwind-merge';
import PersonalizeSettings from './PersonalizeSettings';
import PersonalizeCheckbox from './PersonalizeCheckbox';

function Header({ className }: { className: string }) {
  return (
    <div className={twMerge('md:mb-0 md:flex md:justify-between', className)}>
      <h2>News</h2>
      <div className="flex items-center">
        <PersonalizeSettings />
        <PersonalizeCheckbox />
      </div>
    </div>
  );
}

export default Header;
