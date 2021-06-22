const htmlIcon = '/images/portfolio/tech-icons/html-5.svg';
const cssIcon = '/images/portfolio/tech-icons/css-3.svg';
const javascriptIcon = '/images/portfolio/tech-icons/javascript-icon.svg';
const nodeJsIcon = '/images/portfolio/tech-icons/nodejs-icon.svg';
const express = '/images/portfolio/tech-icons/express.svg';
const react = '/images/portfolio/tech-icons/react.svg';
const pug = '/images/portfolio/tech-icons/pug.svg';

const projects = [
  {
    id: 1,
    projectName: 'Maids Next Door',
    description:
      'Live Home Cleaning Service site with custom booking form. Clients can get a customize quote or book their service using the custom booking form. The form has increased conversion rate by more than 80% compared to initial prototype. And connects to multiple external APIs, ActiveCampaign, Stripe, and Business CRM',
    liveDemoUrl: 'https://maidsnextdoor.com/cleaning-quote?testmode=true',
    githubRepo: 'https://github.com/chrislemus/MND_Public_Demo',
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
    id: 2,
    projectName: 'Chamba Business CRM',
    description:
      'Business CRM with Modern/Simple UI. CRM stores customer information and other documents(eg. invoices). Front-end is built using React with NextJs framework. And the API is hosted separately using Ruby on Rails API.',
    serverWakeUpUrl: 'https://chamba-api.herokuapp.com/',
    liveDemoUrl: 'https://chamba.vercel.app',
    githubRepo: 'https://github.com/chrislemus/chamba',
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
    id: 3,
    projectName: 'Bizzy - Business Listings',
    description:
      'Local business listings WebApp built with Ruby on Rails. App allows users to sign in using third party authentication(eg. Google). Search for businesses, write reviews, or add your business to the sites directory.',
    serverWakeUpUrl: 'https://bizzy-listings.herokuapp.com/',
    liveDemoUrl: 'https://bizzy-listings.herokuapp.com/',
    githubRepo: 'https://github.com/chrislemus/bizzy',
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
    id: 4,
    projectName: 'Online Courses WebApp',
    description:
      'School WebApp running on React for Front-End and Express/MySQL on backend. Allows for CRUD operations to MySQL Database.',
    serverWakeUpUrl:
      'https://online-courses-rest-api.herokuapp.com/api/courses',
    liveDemoUrl: 'https://webcourses.netlify.app/',
    githubRepo: 'https://github.com/chrislemus/online-courses-webapp',
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
    id: 5,
    projectName: 'Library Books Database',
    description:
      'Library application running on Express, retrieves book information from database. Allows for CRUD operations on client side. ',
    serverWakeUpUrl: 'https://library-db-sql.herokuapp.com/books',
    liveDemoUrl: 'https://library-db-sql.herokuapp.com/books',
    githubRepo: 'https://github.com/chrislemus/Library-Books-DB',
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
    id: 6,
    projectName: 'OOP Game Show App',
    description:
      'Word guessing game: "Phrase Hunter" - Javascript and OOP (Object-Oriented Programming)',
    liveDemoUrl: 'https://chrislemus.github.io/OOP-Game-Show-App/',
    githubRepo: 'https://github.com/chrislemus/OOP-Game-Show-App',
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

export default projects;
