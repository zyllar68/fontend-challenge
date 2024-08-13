import { WithChildren } from 'lib/types/props';

function Container({ children }: WithChildren) {
  return (
    <div className="container mx-auto mt-10 max-w-screen-lg px-6">
      {children}
    </div>
  );
}

export default Container;
