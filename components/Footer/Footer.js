import React from 'react';

const Footer = () => {
  const social = [
    { id: 1, link: 'Linkedin' },
    { id: 2, link: 'Behance' },
    { id: 3, link: 'Instagram' }
  ];
  return (
    <div className="bg-black-200 md:grid md:grid-rows-3 md:grid-rows-4 mt-32">
      <h3 className="text-white-300 font text-3xl px-10 mt-5">
        Lets talk, Coffee ?
      </h3>
      <div className="email">
        <a className="text-white-100 cursor-pointer px-10 mt-5 font-sub">
          jessiemtabilisma@gmail.com
        </a>
      </div>
      <div className="block md:flex row-start-3 md:row-start-4 md:bg-white-100">
        <ul className="w-full md:w-1/2 flex px-10 mt-5">
          {social.map(social => {
            return (
              <li key={social.id} className="mr-8">
                <a className="font-sub cursor-pointer text-white-100 md:text-black-200">
                  {social.link}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="w-full text-white-100 md:text-black-200 md:w-1/2 md:text-right px-10 mt-5 font-sub">
          <span>2019 © Jessie Tabilisma.</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
