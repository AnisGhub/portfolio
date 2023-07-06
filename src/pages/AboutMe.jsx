import React from 'react';
import mePic from '../images/photolinkedin.jpg';
import { clientsData } from '../data/clientsData';
import reactLogo from '../images/techlogo/react.svg';
import reduxLogo from '../images/techlogo/redux.svg';
import javascriptLogo from '../images/techlogo/javascript.svg';
import typescriptLogo from '../images/techlogo/typescript.svg';
import htmlLogo from '../images/techlogo/html.svg';
import cssLogo from '../images/techlogo/css.svg';
import sassLogo from '../images/techlogo/sass.svg';
import tailwindLogo from '../images/techlogo/tailwind.svg';
import nodejsLogo from '../images/techlogo/nodejs.svg';

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
              Bonjour ! Je suis Anis, développeur <b>spécialisé</b> dans l&apos;écosystème{' '}
              <b>JavaScript</b>, avec une expertise particulière sur <b>React</b>. J&apos;ai plus de
              3 ans d&apos;expérience en ESN, où j&apos;ai travaillé sur divers projets avec
              différents clients.
            </p>
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Mon objectif aujourd&apos;hui est de continuer à me spécialiser et me perfectionner
              dans le développement front end, et dans un avenir proche, explorer le développement
              mobile avec react native.
            </p>
            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Je suis <b>curieux</b> de nature, <b>j&apos;adore apprendre</b> et relever de nouveaux
              défis. Je suis <b>passionné</b> par le développement et je reste constamment à
              l&apos;affût des dernières tendances et des meilleures pratiques pour continuer à
              améliorer mes compétences.
            </p>

            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
              Si vous recherchez un développeur <b>enthousiaste</b>, prêt à relever de nouveaux
              défis, capable de <b>s&apos;adapter rapidement</b> à une équipe n&apos;hésitez pas à
              me contacter. Je serais ravi de discuter de la façon dont je peux contribuer à votre
              équipe ou à votre projet.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm py-14">
        <div className="xl:container xl:mx-auto flex justify-start overflow-hidden">
          <div className="min-w-full shrink-0 flex justify-around items-center animate-marquee">
            {skills.map((skill) => (
              <a href={skill.link} key={skill.name} className="mr-6 md:mr-0">
                <img src={skill.logo} alt={skill.name} className="h-10 md:h-14" />
              </a>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="min-w-full shrink-0 flex justify-around items-center animate-marquee"
          >
            {skills.map((skill) => (
              <a href={skill.link} key={skill.name} className="mr-6 md:mr-0">
                <img src={skill.logo} alt={skill.name} className="h-10 md:h-14" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-10 sm:mt-20">
          <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
            Entreprises qui m&apos;ont accordé leur confiance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
            {clientsData.map((client) => (
              <img
                src={client.img}
                className="w-64 h-44 object-contain py-5 px-5 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
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
