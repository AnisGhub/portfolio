import React from 'react';
import mePic from '../images/photolinkedin.jpg';
import { clientsData } from '../data/clientsData';
import reactLogo from '../images/react.svg';
import reduxLogo from '../images/redux.svg';
import javascriptLogo from '../images/javascript.svg';
import typescriptLogo from '../images/typescript.svg';
import htmlLogo from '../images/html.svg';
import cssLogo from '../images/css.svg';
import sassLogo from '../images/sass.svg';
import tailwindLogo from '../images/tailwind.svg';
import nodejsLogo from '../images/nodejs.svg';

const skills = [
  {
    name: 'React',
    logo: reactLogo,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    logo: reduxLogo,
    link: 'https://redux.js.org/',
  },
  {
    name: 'Javascript',
    logo: javascriptLogo,
    link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    logo: typescriptLogo,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'HTML',
    logo: htmlLogo,
    link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
  },
  {
    name: 'CSS',
    logo: cssLogo,
    link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
  },
  {
    name: 'Sass',
    logo: sassLogo,
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Tailwind',
    logo: tailwindLogo,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'nodeJS',
    logo: nodejsLogo,
    link: 'https://nodejs.org/en/',
  },
  // Ajoutez les autres technologies ici
];

function About() {
  return (
    <>
      <div className="container mx-auto">
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img src={mePic} className="rounded-lg w-full" alt="" />
          </div>
          <div className="font-general-regular w-full sm:w-3/4 text-left">
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
              dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
              consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus
              obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore
              excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam
              perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus
              nesciunt odit libero tenetur neque consequatur earum
            </p>
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
              dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
              consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm py-14">
        <div className="xl:container xl:mx-auto flex justify-start overflow-hidden">
          <div className="py-8 min-w-full shrink-0 flex justify-around items-center animate-marquee">
            {skills.map((skill) => (
              <a href={skill.link} key={skill.name}>
                <img src={skill.logo} alt={skill.name} className="h-10 md:h-14" />
              </a>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="py-8 min-w-full shrink-0 flex justify-around items-center animate-marquee"
          >
            {skills.map((skill) => (
              <a href={skill.link} key={skill.name}>
                <img src={skill.logo} alt={skill.name} className="h-10 md:h-14" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-10 sm:mt-20">
          <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
            Some of the brands that trust me
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
            {clientsData.map((client) => (
              <img
                src={client.img}
                className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
                alt={client.title}
                key={client.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
