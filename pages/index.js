import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Index() {
  return (
    <div>
      <Header title="Jessie Tabilisma" />
      <Navbar />
      <main className="px-8 md:px-12 lg:px-20">
        <div className="block mt-32">
          <span className="uppercase tracking-wide text-xs xl:text-sm text-gray-300 font-semibold">
            Jessie Tabilisma - Front end Developer and Designer
          </span>
          <p className=" w-full md:w-1/2 text-xl md:text-3xl lg:text-4xl tracking-wider font-medium mt-5 font text-black-200">
            I am based from the Philippines and I love to Design and Develop
            Website.
          </p>
        </div>
        <Projects />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
