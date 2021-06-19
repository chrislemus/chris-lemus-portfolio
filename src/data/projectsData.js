const htmlIcon = './images/portfolio/tech-icons/html-5.svg';
const cssIcon = './images/portfolio/tech-icons/css-3.svg';
const javascriptIcon = './images/portfolio/tech-icons/javascript-icon.svg';
const nodeJsIcon = './images/portfolio/tech-icons/nodejs-icon.svg';
const express = './images/portfolio/tech-icons/express.svg';
const react = './images/portfolio/tech-icons/react.svg';
const pug = './images/portfolio/tech-icons/pug.svg';

const projects = [
  {
    id: 1,
    projectName: 'Online Courses WebApp',
    description:
      'School WebApp running on React for Front-End and Express/MySQL on backend. Allows for CRUD operations to MySQL Database.',
    warnMsg: ['*please allow up to 20 sec. for server to boot up'],
    liveDemoUrl: 'https://webcourses.netlify.app/',
    githubRepo: 'https://github.com/chrislemus/online-courses-webapp',
    thumbnail: './images/portfolio/thumbnails/p1-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 2,
    projectName: 'Library Books Database',
    description:
      'Library application running on Express, retrieves book information from database. Allows for CRUD operations on client side. ',
    warnMsg: ['*please allow up to 20 sec. for server to boot up'],
    liveDemoUrl: 'https://library-db-sql.herokuapp.com/books',
    githubRepo: 'https://github.com/chrislemus/Library-Books-DB',
    thumbnail: './images/portfolio/thumbnails/p3-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 3,
    projectName: 'Analytics Dashboard',
    description:
      'Interactive dashboard for a web application using advanced web techniques including SVG graphics and caching user settings',
    liveDemoUrl: 'https://chrislemus.github.io/Analytics-Dashboard/',
    githubRepo: 'https://github.com/chrislemus/Analytics-Dashboard',
    thumbnail: './images/portfolio/thumbnails/p4-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 4,
    projectName: 'Online Gallery',
    description:
      ' Fast and lightweight gallery app with a modern approach; communicates with a third-party API (Application Programming Interface).',
    liveDemoUrl: 'https://gallery-app-react.netlify.app/',
    githubRepo: 'https://github.com/chrislemus/React-Gallery-App',
    thumbnail: './images/portfolio/thumbnails/p5-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 5,
    projectName: 'OOP Game Show App',
    description:
      'Word guessing game: "Phrase Hunter" - Javascript and OOP (Object-Oriented Programming)',
    liveDemoUrl: 'https://chrislemus.github.io/OOP-Game-Show-App/',
    githubRepo: 'https://github.com/chrislemus/OOP-Game-Show-App',
    thumbnail: './images/portfolio/thumbnails/p6-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 6,
    projectName: 'Static Node Express Site',
    description:
      'Node.js and Express portfolio site, using Pug templates for views',
    warnMsg: ['*please allow up to 20 sec. for server to boot up'],
    liveDemoUrl: 'https://static-node-express-site.herokuapp.com/',
    githubRepo: 'https://github.com/chrislemus/static-node-express-site',
    thumbnail: './images/portfolio/thumbnails/p7-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 7,
    projectName: 'Interactive Form',
    description:
      'Enhance form so that it’s engaging, interactive, and easy to use.',
    liveDemoUrl: 'https://chrislemus.github.io/Interactive-Form/',
    githubRepo: 'https://github.com/chrislemus/Interactive-Form',
    thumbnail: './images/portfolio/thumbnails/p9-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 8,
    projectName: 'Web Style Guide',
    description:
      'Sass Web Style guide that can be used for other projects in front end development.',
    liveDemoUrl: 'https://chrislemus.github.io/web-style-guide-sass/',
    githubRepo: 'https://github.com/chrislemus/web-style-guide-sass',
    thumbnail: './images/portfolio/thumbnails/p11-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
  {
    id: 9,
    projectName: 'Employee Directory',
    description:
      'Employee directory that communicates with a third-party API (Application Programming Interface).',
    liveDemoUrl: 'https://chrislemus.github.io/Employee-Directory',
    githubRepo: 'https://github.com/chrislemus/Employee-Directory',
    thumbnail: './images/portfolio/thumbnails/p2-thumb.jpg',
    technologies: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      nodeJsIcon,
      express,
      react,
      pug,
    ],
  },
];

export default projects;
