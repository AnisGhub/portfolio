// Import images
import portfolio1 from '../images/Projects/portfolio1.png';
import portfolio2 from '../images/Projects/portfolio2.png';
import portfolio3 from '../images/Projects/portfolio3.png';
import argentbank1 from '../images/Projects/argentbank1.png';
import argentbank2 from '../images/Projects/argentbank2.png';
import argentbank3 from '../images/Projects/argentbank3.png';
import kasa1 from '../images/Projects/kasa1.png';
import kasa2 from '../images/Projects/kasa2.png';
import kasa3 from '../images/Projects/kasa3.png';
import sportSee1 from '../images/Projects/sportSee1.png';
import sportSee3 from '../images/Projects/sportSee3.png';
import WealthHealth1 from '../images/Projects/WealthHealth1.png';
import WealthHealth2 from '../images/Projects/WealthHealth2.png';
import WealthHealth3 from '../images/Projects/WealthHealth3.png';

export const projectsData = [
  {
    id: 1,
    title: 'Argent Bank',
    category: 'Formation',
    img: argentbank3,
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
        img: argentbank3,
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
        {
          id: 4,
          title: 'url',
          details: 'Repo',
          url: 'https://github.com/AnisGhub/anis_openclassrooms_p13',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            "Le projet concerne la création d'une application pour une nouvelle banque appelée Argent Bank. (pour utiliser le projet: suivez les instructions du repo)",
        },
        {
          id: 2,
          details:
            "Le contrat se compose de deux phases : l'authentification des utilisateurs (phase 1) et les transactions (phase 2).",
        },
        {
          id: 3,
          details:
            'Objectif : \n' +
            "-> Créer une application web complète et réactive avec React pour l'authentification des utilisateurs.\n" +
            "-> Utiliser Redux pour gérer l'état global de l'application.\n" +
            '-> Permettre aux utilisateurs de se connecter, de se déconnecter et de gérer leur profil.\n' +
            "-> Afficher les informations du profil de l'utilisateur uniquement après une connexion réussie.\n" +
            '-> Mettre à jour les données du profil et les enregistrer dans la base de données.\n' +
            "-> Respecter les maquettes fournies et suivre les modèles d'Issues GitHub pour guider le développement.\n" +
            '-> Assurer la compatibilité avec différents navigateurs et appareils pour une expérience utilisateur optimale.\n' +
            "-> Travailler en collaboration avec l'équipe back-end pour intégrer les API nécessaires.\n" +
            "-> Optimiser les performances de l'application pour garantir un chargement rapide et une navigation fluide.\n" +
            "-> Présenter les livrables finaux, responsable technique d'Argent Bank.",
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
        {
          id: 4,
          title: 'url',
          details: 'Repo',
          url: 'https://github.com/AnisGhub/anis_openclassrooms_p12',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Recharts'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'SportSee, est une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur.(pour utiliser le projet: suivez les instructions du repo)',
        },
        {
          id: 2,
          details:
            'Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.',
        },
        {
          id: 3,
          details:
            'Objectif : \n' +
            '-> Refaire la page de profil utilisateur en utilisant React.\n' +
            "-> Intégrer des graphiques d'activité sportive à l'aide de D3 ou Recharts.\n" +
            "-> Se concentrer sur la version desktop de l'interface, en assurant une lisibilité sur des écrans d'au moins 1024 par 780 pixels.\n" +
            "-> Utiliser un backend NodeJS pour les appels HTTP et récupérer des données d'exemple.\n" +
            "-> Créer un mock des données de l'API au départ et intégrer l'API une fois que le projet fonctionne correctement.\n" +
            "-> Créer une classe de modélisation des données pour formater correctement les données de l'API.\n" +
            '-> Documenter le projet (Readme, JSDoc, proptypes, etc.) pour faciliter la collaboration.',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Kasa',
    category: 'Formation',
    img: kasa1,
    ProjectHeader: {
      title: 'Kasa',
      publishDate: 'Jun 29, 2023',
      tags: ['UI', 'Frontend', 'Web', 'responsive', 'Figma'],
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
        {
          id: 4,
          title: 'url',
          details: 'Repo',
          url: 'https://github.com/AnisGhub/anis_openclassrooms_p11',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Router'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France. (pour utiliser le projet: suivez les instructions du repo)',
        },
        {
          id: 2,
          details:
            'Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel',
        },
        {
          id: 3,
          details:
            'Objectif : \n' +
            '-> Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router.\n' +
            '-> Suivre les maquettes Figma pour assurer un design responsive.\n' +
            '-> Assurer un code de qualité tout au long du développement.\n' +
            "-> Utiliser les données d'exemple extraites des 20 dernières annonces de logements dans un fichier JSON.\n" +
            '-> Respecter les coding guidelines de Kasa pour une cohérence dans le code.\n' +
            '-> Implémenter les fonctionnalités spécifiques, telles que le défilement des photos dans la galerie et le comportement des Collapse selon les contraintes fonctionnelles spécifiées par Paul, le designer.\n' +
            '-> Documenter le projet pour faciliter la collaboration et la maintenance.',
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
      publishDate: 'Jul 06, 2023',
      tags: ['UI', 'Frontend', 'Web', 'Responsive', 'Dark mode'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: portfolio1,
      },
      {
        id: 2,
        title: 'image2',
        img: portfolio2,
      },
      {
        id: 3,
        title: 'image3',
        img: portfolio3,
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
          techs: ['HTML', 'tailwindcss', 'React', 'vsCode', 'git', 'vercel'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'Le projet Portfolio est un projet personnel conçu dans le but de présenter mes projets, mettre en avant mes compétences.',
        },
        {
          id: 2,
          details:
            "Il a également été une opportunité pour travailler avec React et m'améliorer dessus.",
        },
        {
          id: 3,
          details:
            'Objectif : \n' +
            '-> Développer une interface utilisateur moderne et esthétique pour afficher mes projets de manière attrayante.\n' +
            "-> Mettre en place un système de navigation fluide pour faciliter l'accès aux différentes sections du portfolio.\n" +
            '-> Assurer la compatibilité avec différents appareils et navigateurs pour une expérience utilisateur optimale.\n' +
            "-> Implémenter un mode sombre pour offrir une alternative visuelle et améliorer l'accessibilité.\n" +
            "-> Intégrer des liens vers mes réalisations, mes profils sur les réseaux sociaux et d'autres plateformes professionnelles.\n" +
            '-> Optimiser les performances du site pour un chargement rapide et une navigation fluide.\n' +
            '-> Mettre à jour régulièrement le contenu du portfolio pour refléter mes derniers projets et compétences.',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Wealth Health',
    category: 'Formation',
    img: WealthHealth3,
    ProjectHeader: {
      title: 'Wealth Health HRnet',
      publishDate: 'Jul 20, 2023',
      tags: ['UI Lib', 'Frontend', 'Web', 'Table', 'Form', 'Modal'],
    },
    ProjectImages: [
      {
        id: 1,
        title: 'image1',
        img: WealthHealth1,
      },
      {
        id: 2,
        title: 'image2',
        img: WealthHealth2,
      },
      {
        id: 3,
        title: 'image3',
        img: WealthHealth3,
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
          details: 'HRnet',
          url: 'https://anis-openclassrooms-p14.vercel.app/',
        },
        {
          id: 4,
          title: 'url',
          details: 'Repo',
          url: 'https://github.com/AnisGhub/anis_openclassrooms_p14',
        },
      ],
      RoleHeading: 'Rôle',
      RoleDetails: 'Developpeur Frontend',
      Technologies: [
        {
          title: 'Technologies & Outils',
          techs: ['HTML', 'React', 'Redux', 'MUI', 'UI component'],
        },
      ],
      MissionHeading: 'Mission',
      MissionDetails: [
        {
          id: 1,
          details:
            'WealthHealth possède une application web interne appelée HRnet qui gère les dossiers des employés',
        },
        {
          id: 2,
          details:
            "Actuellement, HRnet utilise jQuery côté frontend, ce qui entraîne des bugs et des plaintes en interne. Le projet consiste à convertir l'ensemble de l'application HRnet en React pour améliorer les performances et la stabilité.",
        },
        {
          id: 3,
          details:
            'Objectif : \n' +
            "-> Convertir l'ensemble de l'application HRnet en React.\n" +
            '-> Créer une nouvelle version des pages "Create Employee" et "Employee List" avec React.\n' +
            "-> Ajouter un système de gestion d'état basé sur React (avec utilisation du stockage local).\n" +
            "-> Convertir l'un des quatre plugins jQuery actuels en un composant React personnalisé." +
            "-> Effectuer des tests de performance Lighthouse pour comparer les performances de l'application HRnet actuelle et de la nouvelle application HRnet React.",
        },
      ],
    },
  },
  // Ajoutez d'autres projets ici...
];

export default projectsData;
