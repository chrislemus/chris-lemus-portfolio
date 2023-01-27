const htmlIcon = '/images/portfolio/tech-icons/html-5.svg';
const cssIcon = '/images/portfolio/tech-icons/css-3.svg';
const javascriptIcon = '/images/portfolio/tech-icons/javascript-icon.svg';
const nodeJsIcon = '/images/portfolio/tech-icons/nodejs-icon.svg';
const express = '/images/portfolio/tech-icons/express.svg';
const react = '/images/portfolio/tech-icons/react.svg';
const pug = '/images/portfolio/tech-icons/pug.svg';

/**
 * @important do not update `id`. Persist project info data to ensure old resume links to demos are not outdated (single source of truth will be this site.)
 */
const _portfolio: {
  id: number;
  order: number;
  shouldDisplay: boolean;
  projectName: string;
  description: string;
  demoUrl: string;
  thumbnail: string;
  status: string;
  technologies: string[];
  repoUrl?: string;
  serverWakeUpUrl?: string;
}[] = [
  {
    id: 1,
    order: 2,
    shouldDisplay: true,
    projectName: 'Genesys Knowledge Network',
    description:
      'Genesys Knowledge Network (GKN) an all-in-one access point for Genesys resources. The site integrates with various third-party services to serve dynamic content. And a customizable UI to provide a unique experience for every user. *unable to provide repo for private enterprise project.',
    demoUrl: 'https://know.genesys.com/',
    thumbnail: '/images/portfolio/thumbnails/gkn.jpg',
    status: 'featured',
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
    order: 3,
    shouldDisplay: true,
    projectName: 'Maids Next Door',
    description:
      "Home Cleaning Service site with a custom booking form that provides a  customized quote and instant online booking. The site's conversion rate has increased by more than 80% after migrating from WordPress to ReactJS.",
    demoUrl: 'https://maidsnextdoor.com',
    repoUrl: 'https://github.com/chrislemus/MND_Public_Demo',
    thumbnail: '/images/portfolio/thumbnails/maids-next-door.jpg',
    status: 'done',
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
    order: 4,
    shouldDisplay: false,
    projectName: 'Chamba Business CRM',
    description:
      'A Business CRM WebApp with Modern/Simple UI. Store customer information and other documents(e.g., invoices) in a user-friendly dashboard.  NextJs framework is used on the Front-end. And the Back-end is built with Ruby on Rails.',
    serverWakeUpUrl: 'https://chamba-api.herokuapp.com/',
    demoUrl: 'https://chamba.vercel.app',
    repoUrl: 'https://github.com/chrislemus/chamba',
    thumbnail: '/images/portfolio/thumbnails/chamba-crm.jpg',
    status: 'in progress',
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
    order: 5,
    shouldDisplay: true,
    projectName: 'Bizzy - Business Listings',
    description:
      "Local business listings WebApp built with Ruby on Rails. The app allows users to sign in using third-party authentication(e.g., Google). Search for businesses, write reviews or add your business to the site's directory.",
    serverWakeUpUrl: 'https://bizzy-listings.herokuapp.com/',
    demoUrl: 'https://bizzy-listings.herokuapp.com/',
    repoUrl: 'https://github.com/chrislemus/bizzy',
    thumbnail: '/images/portfolio/thumbnails/bizzy-listings.jpg',
    status: 'done',
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
    order: 6,
    shouldDisplay: false,
    projectName: 'Online Courses WebApp',
    description:
      'Online courses WebApp. Allows users to create and share online courses. The Frontend is built with React, and the Backend uses ExpressJs.',
    serverWakeUpUrl:
      'https://online-courses-rest-api.herokuapp.com/api/courses',
    demoUrl: 'https://webcourses.netlify.app/',
    repoUrl: 'https://github.com/chrislemus/online-courses-webapp',
    thumbnail: '/images/portfolio/thumbnails/online-courses.jpg',
    status: 'done',
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
    order: 7,
    shouldDisplay: false,
    projectName: 'Library Books Database',
    description:
      'A library application running on Express retrieves book information from a database. Allows for CRUD operations on client side.',
    serverWakeUpUrl: 'https://library-db-sql.herokuapp.com/books',
    demoUrl: 'https://library-db-sql.herokuapp.com/books',
    repoUrl: 'https://github.com/chrislemus/Library-Books-DB',
    thumbnail: '/images/portfolio/thumbnails/library-books-db.jpg',
    status: 'done',
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
    order: 8,
    shouldDisplay: true,
    projectName: 'OOP Game Show App',
    description:
      'Online game show app built with vanilla JS and using the Object-Oriented Programming paradigm.',
    demoUrl: 'https://chrislemus.github.io/OOP-Game-Show-App/',
    repoUrl: 'https://github.com/chrislemus/OOP-Game-Show-App',
    thumbnail: '/images/portfolio/thumbnails/game-show-app.jpg',
    status: 'done',
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
    order: 1,
    shouldDisplay: true,
    projectName: 'Job Quest',
    description:
      'An intuitive web app to organize your job search. Store information on job postings and keep track of job applications. Frontend is built with NextJS and the backend is built with NestJS.',
    demoUrl: 'https://job-quest.vercel.app/',
    repoUrl: 'https://github.com/chrislemus/job-quest',
    thumbnail: '/images/portfolio/thumbnails/job-quest.png',
    status: 'featured',
    technologies: [],
  },
  {
    id: 9,
    order: 9,
    shouldDisplay: false,
    projectName: 'Job Quest API',
    description: 'Job Quest API',
    demoUrl:
      'https://hduzytklhp4d6oaf4yv3kig2fy0dcmsf.lambda-url.us-east-1.on.aws/api',
    repoUrl: 'https://github.com/chrislemus/job-quest-api',
    thumbnail: '/images/portfolio/thumbnails/job-quest.png',
    status: 'done',
    technologies: [],
  },
];

export const portfolio = _portfolio
  .filter((project) => project.shouldDisplay)
  .sort((a, b) => a.order - b.order);
