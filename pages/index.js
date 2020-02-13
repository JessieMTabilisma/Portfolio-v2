import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';

export default function Index() {
  return (
    <div>
      <Navbar />
      <main className="px-8 md:px-12">
        <div className="block mt-32">
          <span className="uppercase tracking-wide text-xs text-gray-300 font-semibold">
            Jessie Tabilisma - Front end Developer and Designer
          </span>
          <p className=" w-full md:w-1/2 text-xl md:text-3xl tracking-wider font-medium mt-5 font text-black-200">
            I am based from the Philippines and I love to Design and Develop
            Website.
          </p>
        </div>
        <Projects />
      </main>
    </div>
  );
}
