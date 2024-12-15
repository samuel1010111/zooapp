import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">zoo</Link>
        </h1>
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/animals" className="text-white hover:text-yellow-300 transition duration-300">
              Animals
            </Link>
          </li>
          <li>
            <Link to="/category/birds" className="text-white hover:text-yellow-300 transition duration-300">
              Birds
            </Link>
          </li>
          <li>
            <Link to="/category/insects" className="text-white hover:text-yellow-300 transition duration-300">
              Insects
            </Link>
          </li>
          <li>
            <Link to="/category/fish" className="text-white hover:text-yellow-300 transition duration-300">
              Fish
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
