const htmlIcon = '/images/portfolio/tech-icons/html-5.svg';
const cssIcon = '/images/portfolio/tech-icons/css-3.svg';
const javascriptIcon = '/images/portfolio/tech-icons/javascript-icon.svg';
const nodeJsIcon = '/images/portfolio/tech-icons/nodejs-icon.svg';
const express = '/images/portfolio/tech-icons/express.svg';
const react = '/images/portfolio/tech-icons/react.svg';
const pug = '/images/portfolio/tech-icons/pug.svg';

export const portfolio = [
  {
    id: 1,
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
    projectName: 'Maids Next Door',
    description:
      "Home Cleaning Service site with a custom booking form that provides a  customized quote and instant online booking. The site's conversion rate has increased by more than 80% after migrating from WordPress to ReactJS.",
    demoUrl: 'https://maidsnextdoor.com/cleaning-quote?testmode=true',
    repoUrl: 'https://github.com/chrislemus/MND_Public_Demo',
    thumbnail: '/images/portfolio/thumbnails/maids-next-door.jpg',
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
    id: 3,
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
];
