import Link from "next/link";
import Button from "./Button";

const NavBar = ({ display, btnContent, hrefLink }) => {
  return (
    <nav className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold text-red-600">
          Sahara
        </Link>
        <div className="flex gap-24">
          <div className={`hidden md:${display}  items-center gap-8 text-lg`}>
            <Link
              href="#features"
              className="text-gray-600 hover:text-red-600 "
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-red-600"
            >
              How it Works
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-red-600">
              Services
            </Link>
          </div>
          <Link href={hrefLink}>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              {btnContent}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
