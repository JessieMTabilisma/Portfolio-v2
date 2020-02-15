import '../../styles/index.css';

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
const kaagapai = () => {
  const imageData = [
    {
      id: 1,
      path: '/kaagapai/login-page.png',
      alt: 'kaagapAI Login Page UI Design'
    },
    {
      id: 2,
      path: '/kaagapai/signup-page.png',
      alt: 'kaagapAI Sign Up Page UI Design'
    },
    {
      id: 3,
      path: '/kaagapai/client-management.png',
      alt: 'kaagapAI Client Management Page UI Design'
    },
    {
      id: 4,
      path: '/kaagapai/session-management.png',
      alt: 'kaagapAI Session Management Page UI Design'
    },
    {
      id: 5,
      path: '/kaagapai/entities.png',
      alt: 'kaagapAI Etities viewer UI Design'
    },
    {
      id: 6,
      path: '/kaagapai/keywords.png',
      alt: 'kaagapAI Keywords Word cloud Viewer UI Design'
    },
    {
      id: 7,
      path: '/kaagapai/session-analysis.png',
      alt: 'kaagapAI Session Analysis Page UI Design'
    },
    {
      id: 8,
      path: '/kaagapai/empty-client.png',
      alt: 'kaagapAI Empty Client Page UI Design'
    },
    {
      id: 9,
      path: '/kaagapai/upload-documents.png',
      alt: 'kaagapAI Upload module Page UI Design'
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
    { id: 2, tools: 'React Material UI' },
    { id: 3, tools: 'Figma' },
    { id: 4, tools: 'Travis CI' },
    { id: 5, tools: 'Firebase Hosting' },
    { id: 6, tools: 'Heroku' },
    { id: 7, tools: 'Google Cloud SQL' }
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
      <Header title="Project - kaagapAI" />
      <Navbar />
      <main>
        <div className="md:grid md:grid-flow-row md:grid-cols-5 md:grid-rows-1 px-8 md:px-32 lg:px-32">
          <h2 className="col-span-3 mt-20 text-4xl font text-black font-semibold">
            kaagapAI
          </h2>
          <div className="md:mt-20 pt-5 md:col-span-1 md:text-right">
            <span className="font-sub text-xs text-gray-200 uppercase">
              Type:{' '}
            </span>
            <span className="ml-4 font-semibold text-xs">Thesis Project</span>
          </div>
          <div className="md:col-span-1 md:mt-20 pt-5 md:text-right">
            <span className="font-sub text-xs text-gray-200">Year: </span>
            <span className="ml-4 font-semibold text-xs uppercase">2019</span>
          </div>
        </div>
        <div className="w-full mt-10 justify-center center content-center text-center flex">
          <img src="/kaagapai/kaagapai.svg" alt="kaagapai text analysis tool" />
        </div>
        <div className="px-8 md:px-32 mt-12 md:grid md:grid-cols-5">
          <p className="text-black-100 text-sm font-thin pb-10 md:col-span-3">
            kaagapAI is an automated text analysis tool that aims to assist
            mental health practitioners in summarizing, analyzing, and managing
            therapy session documents.It features <b>Document Analysis</b>,
            <b>Documents proccessing</b>, and <b>Client/ Session Management.</b>
          </p>
          <span className="mt-20 md:mt-0 md:col-span-1 text-right mr-2 font-semibold uppercase">
            Skills:{' '}
          </span>
          <ul className="md:col-span-1 text-gray-200 ml-3">
            <li>UX / UI</li>
            <li>Front End Development</li>
            <li>Micro Services Deployment</li>
            <li>Continous Integration</li>
          </ul>
        </div>
        <div className="px-8 mt-10 md:px-32 md:grid-cols-8 md:gap-5 md:mt-32 md:grid">
          <button className="hover:bg-black-100 md:col-start-7 md:col-span-1 cursor-pointer px-6 py-2 md:p-2 bg-black-200 text-white-100 font">
            <a href="https://kaagapai.herokuapp.com/" target="_blank">
              Visit site
            </a>
          </button>
          <button className="hover:bg-black-100 md:col-span-1 cursor-pointer ml-4 px-6 py-2 md:p-2 bg-black-200 text-white-100 font">
            <a
              href="https://github.com/prometheus-tech/kaagapAI"
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
            src="/kaagapai/iso.png"
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
export default kaagapai;
