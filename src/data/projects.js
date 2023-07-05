// Import images
import placeholderimage from '../images/placeholder.jpg';
import portfolio1 from '../images/portfolio1.png';
import argentbank1 from '../images/argentbank1.png';
import argentbank2 from '../images/argentbank2.png';
import kasamain from '../images/kasa-main.jpeg';
import kasa1 from '../images/kasa1.png';
import kasa2 from '../images/kasa2.png';
import kasa3 from '../images/kasa3.png';
import sportSee1 from '../images/sportSee1.png';
import sportSee3 from '../images/sportSee3.png';

export const projectsData = [
  {
    id: 1,
    title: 'Argent Bank',
    category: 'Formation',
    img: argentbank1,
    ProjectHeader: {
      title: 'Argent Bank',
      publishDate: 'Jun 29, 2023',
      tags: ['UI', 'Frontend', 'Web', 'API', 'Authentication'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: argentbank1,
      },
      {
        id: 2,
        title: 'image2',
        img: argentbank2,
      },
      {
        id: 3,
        title: 'image3',
        img: placeholderimage,
      },
    ],
    ProjectInfo: {
      infoHeading: 'Details du projet',
      infoBody: [
        {
          id: 1,
          title: 'Contexte',
          details: 'Projet de formation',
        },
        {
          id: 2,
          title: 'Organisme',
          details: 'Openclassrooms',
          url: 'https://openclassrooms.com/fr/',
        },
        {
          id: 3,
          title: 'url',
          details: 'Argent Bank',
          url: 'https://anis-openclassrooms-p13.vercel.app',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', '...', '...'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France',
        },
        {
          id: 2,
          details:
            'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel',
        },
        {
          id: 3,
          details:
            'Objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'SportSee',
    category: 'Formation',
    img: sportSee1,
    ProjectHeader: {
      title: 'SportSee',
      publishDate: 'Jun 29, 2023',
      tags: ['UI', 'Frontend', 'Web', 'API', 'Library', 'dashboard'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: sportSee1,
      },
      {
        id: 3,
        title: 'image3',
        img: sportSee3,
      },
    ],
    ProjectInfo: {
      infoHeading: 'Details du projet',
      infoBody: [
        {
          id: 1,
          title: 'Contexte',
          details: 'Projet de formation',
        },
        {
          id: 2,
          title: 'Organisme',
          details: 'Openclassrooms',
          url: 'https://openclassrooms.com/fr/',
        },
        {
          id: 3,
          title: 'url',
          details: 'SportSee',
          url: 'https://anis-openclassrooms-p12.vercel.app/',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'React', 'Router'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France',
        },
        {
          id: 2,
          details:
            'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel',
        },
        {
          id: 3,
          details:
            'Objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Kasa',
    category: 'Formation',
    img: kasamain,
    ProjectHeader: {
      title: 'Kasa',
      publishDate: 'Jun 29, 2023',
      tags: ['UI', 'Frontend', 'Web', 'design'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: kasa1,
      },
      {
        id: 2,
        title: 'image2',
        img: kasa2,
      },
      {
        id: 3,
        title: 'image3',
        img: kasa3,
      },
    ],
    ProjectInfo: {
      infoHeading: 'Details du projet',
      infoBody: [
        {
          id: 1,
          title: 'Contexte',
          details: 'Projet de formation',
        },
        {
          id: 2,
          title: 'Organisme',
          details: 'Openclassrooms',
          url: 'https://openclassrooms.com/fr/',
        },
        {
          id: 3,
          title: 'url',
          details: 'Kasa',
          url: 'https://anisghub.github.io/anis_openclassrooms_p11/',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'React', 'Router'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France',
        },
        {
          id: 2,
          details:
            'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel',
        },
        {
          id: 3,
          details:
            'Objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Portfolio',
    category: 'Personnel',
    img: portfolio1,
    ProjectHeader: {
      title: 'Portfolio',
      publishDate: 'Jul 02, 2023',
      tags: ['UI', 'Frontend', 'Web', 'dark mode'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: placeholderimage,
      },
      {
        id: 2,
        title: 'image2',
        img: placeholderimage,
      },
      {
        id: 3,
        title: 'image3',
        img: placeholderimage,
      },
    ],
    ProjectInfo: {
      infoHeading: 'Details du projet',
      infoBody: [
        {
          id: 1,
          title: 'Contexte',
          details: 'Projet Personnel',
        },
        {
          id: 2,
          title: 'url',
          details: 'Portfolio',
          url: 'https://portfolio-anisghub.vercel.app/',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'React', 'Router'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France',
        },
        {
          id: 2,
          details:
            'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel',
        },
        {
          id: 3,
          details:
            'Objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité',
        },
      ],
    },
  },
  // Ajoutez d'autres projets ici...
];

export default projectsData;
