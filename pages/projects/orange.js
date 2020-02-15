import '../../styles/index.css';

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Head from 'next/head';
const orange = () => {
  const imageData = [
    {
      id: 1,
      path: '/orange/homepage.png',
      alt: 'Orange Omengan Home Page UI Design'
    },
    {
      id: 2,
      path: '/orange/about.png',
      alt: 'Orange Omengan About Page UI Design'
    },
    {
      id: 3,
      path: '/orange/photostory.png',
      alt: 'Orange Omengan Photostory Page UI Design'
    },
    {
      id: 4,
      path: '/orange/story.png',
      alt: 'Orange Omengan article Page UI Design'
    },
    {
      id: 5,
      path: '/orange/tearsheets.png',
      alt: 'Orange Omengan tearsheets page UI Design'
    },
    {
      id: 6,
      path: '/orange/events.png',
      alt: 'Orange Omengan events page UI Design'
    }
  ];
  const imageTable = imageData.map(img => {
    return (
      <img
        src={img.path}
        alt={img.alt}
        key={img.id}
        className="b-shadow mt-10 md:mt-0"
      />
    );
  });
  const techStack = [
    { id: 1, tools: 'ReactJS' },
    { id: 2, tools: 'Next JS' },
    { id: 3, tools: 'Tailwind CSS' },
    { id: 4, tools: 'Zeit' },
    { id: 5, tools: 'Wordpress API' }
  ];
  const techTable = techStack.map(tech => {
    return (
      <h5
        className="col-start-2 mt-2 text-lg font-sub text-black-100 tracking-wider"
        key={tech.id}
      >
        {tech.tools}
      </h5>
    );
  });
  return (
    <div>
      <Header title="Project - Orange Omengan" />
      <Navbar />
      <main>
        <div className="md:grid md:grid-flow-row md:grid-cols-5 md:grid-rows-1 px-8 md:px-32 lg:px-32">
          <h2 className="col-span-3 mt-20 text-4xl font text-black font-semibold">
            Orange Omengan
          </h2>
          <div className="md:mt-20 pt-5 md:col-span-1 md:text-right">
            <span className="font-sub text-xs text-gray-200 uppercase">
              Type:{' '}
            </span>
            <span className="ml-4 font-semibold text-xs">Freelance</span>
          </div>
          <div className="md:col-span-1 md:mt-20 pt-5 md:text-right">
            <span className="font-sub text-xs text-gray-200">Year: </span>
            <span className="ml-4 font-semibold text-xs uppercase">
              2019 - 2020
            </span>
          </div>
        </div>
        <div className="w-full mt-10 justify-center center content-center text-center flex">
          <img
            src="/orange/omengan.svg"
            className="col-start-1"
            alt="Orange Omengan Photography"
          />
        </div>
        <div className="px-8 md:px-32 mt-12 md:grid md:grid-cols-5">
          <p className="text-black-100 text-sm font-thin pb-10 md:col-span-3">
            <b>Orange Omengan</b>, we create a portfolio website for her where
            she can post Photos, Stories, Journal.
          </p>
          <span className="mt-20 md:mt-0 md:col-span-1 text-right mr-2 font-semibold uppercase">
            Skills:{' '}
          </span>
          <ul className="md:col-span-1 text-gray-200 ml-3">
            <li>UX / UI</li>
            <li>Front End Development</li>
            <li>Wordpress API</li>
            <li>Headless CMS</li>
            <li>Business Analysis</li>
          </ul>
        </div>
        <div className="px-8 mt-10 md:px-32 md:grid-cols-8 md:gap-5 md:mt-32 md:grid">
          <button className="hover:bg-black-100 md:col-start-7 md:col-span-1 cursor-pointer px-6 py-2 md:p-2 bg-black-200 text-white-100 font">
            <a
              href="https://orangeomengan.jessiemtabilisma.now.sh/"
              target="_blank"
            >
              View site
            </a>
          </button>
          <button className="hover:bg-black-100 md:col-span-1 cursor-pointer ml-4 px-6 py-2 md:p-2 bg-black-200 text-white-100 font">
            <a
              href="https://github.com/JessieMTabilisma/OrangeOmengan"
              target="_blank"
            >
              Code
            </a>
          </button>
        </div>
        <div className="bg-secondwhite md:grid md:grid-cols-2 mt-32 md:px-20 md:py-20 md:gap-10 px-8 py-8">
          {imageTable}
        </div>
        <div className="md:grid md:grid-col-4 md:px-32 px-8 mt-20">
          <span className="col-start-1 text-xl text-gray-300 font font-medium">
            Technology I Practiced
          </span>
          {techTable}
        </div>
        <div className="w-full h-auto mt-20 pb-20">
          <img
            src="/orange/orange-board.png"
            alt="kaagapai"
            className="max-h-full bg-fixed"
          />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default orange;
