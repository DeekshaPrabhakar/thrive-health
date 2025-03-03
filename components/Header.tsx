import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header>
      <div className="mx-auto flex justify-between items-end">
        {/* logo */}
        <span>
          <Link href="/" className="flex items-end gap-2">
            <Image src="/logo.svg" alt="logo" width={75} height={75} />
            <span>
              <span className="text-3xl font-bold text-pink-500">Thrive</span>
              <p className="text-xl font-bold text-green-500">Health through food</p>
            </span>
          </Link>
        </span>

        {/* desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Link href="/add-food">
            <Button className="text-white text-lg rounded-xl bg-pink-400">{`Don't see food on the list?`}</Button>
          </Link>
        </div>

        {/*mobile */}
        <div className="xl:hidden">Add symbol</div>
      </div>
    </header>
  );
};

export default Header;
