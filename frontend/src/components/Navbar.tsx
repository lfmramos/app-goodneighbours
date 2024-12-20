export default function Navbar() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Quem somos
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contacto
          </a>
        </nav>
        <div>
          <button className="bg-purple-200 text-purple-600 px-4 py-2 rounded mr-2">
            Login
          </button>
          <button className="bg-purple-400 text-white px-4 py-2 rounded">
            Registe-se
          </button>
        </div>
      </header>
    );
  };  