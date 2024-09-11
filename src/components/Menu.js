import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-600 mb-4 md:mb-0">Erin Eagles LCSW</h1>
        <ul className="flex flex-wrap justify-center space-x-8">
          <li><a href="#home" className="text-2xl text-gray-600 hover:text-indigo-600">Home</a></li>
          <li><a href="#services" className="text-2xl text-gray-600 hover:text-indigo-600">Services</a></li>
          <li><a href="#contact" className="text-2xl text-gray-600 hover:text-indigo-600">Contact</a></li>
          <li><a href="#about-me" className="text-2xl text-gray-600 hover:text-indigo-600">About Me</a></li>
          <li><a href="#about-faye" className="text-2xl text-gray-600 hover:text-indigo-600">About Faye</a></li>
          <li><a href="#kap-treatment" className="text-2xl text-gray-600 hover:text-indigo-600">KAP Treatment</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;


