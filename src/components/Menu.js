'use client'

import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10">
        <ul className="flex flex-wrap justify-center space-x-8">
          <li><Link href="/" className="text-xl text-gray-600 hover:text-indigo-600">Home</Link></li>
          <li><Link href="/#services" className="text-xl text-gray-600 hover:text-indigo-600">Services</Link></li>
          <li><Link href="/#contact" className="text-xl text-gray-600 hover:text-indigo-600">Contact</Link></li>
          <li><Link href="/#about-me" className="text-xl text-gray-600 hover:text-indigo-600">About Me</Link></li>
          <li><Link href="/#kap-treatment" className="text-xl text-gray-600 hover:text-indigo-600">KAP Treatment</Link></li>
        </ul>
        </nav>
       
  );
};

export default Menu;


