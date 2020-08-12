const htmlIcon = require("../imgs/portfolio/tech-icons/html-5.svg")
const cssIcon = require("../imgs/portfolio/tech-icons/css-3.svg");
const javascriptIcon = require("../imgs/portfolio/tech-icons/javascript-icon.svg");
const nodeJsIcon = require("../imgs/portfolio/tech-icons/nodejs-icon.svg");
const express = require("../imgs/portfolio/tech-icons/express.svg");
const react = require("../imgs/portfolio/tech-icons/react.svg");
const pug = require("../imgs/portfolio/tech-icons/pug.svg");

const projects = [
        {
            "id": 1,
            "project_name": "Online Courses WebApp",
            "description": "School WebApp running on React for Front-End and Express/MySQL on backend. Allows for CRUD operations on client side.",
            "warnMsg": ["*please allow up to 20 sec. for server to boot up"],
            "live_demo_url": "https://webcourses.netlify.app/",
            "github_repo": "https://github.com/chrislemus/online-courses-webapp",
            "thumbnail": require("../imgs/portfolio/thumbnails/p1-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 2,
            "project_name": "Employee Directory",
            "description": "Employee directory that communicates with a third-party API (Application Programming Interface).",
            "live_demo_url": "https://chrislemus.github.io/Employee-Directory",
            "github_repo": "https://github.com/chrislemus/Employee-Directory",
            "thumbnail": require("../imgs/portfolio/thumbnails/p2-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 3,
            "project_name": "Library Books Database",
            "description": "Library application running on Express, retrieves book information from database. Allows for CRUD operations on client side. ",
            "live_demo_url": "https://library-db-sql.herokuapp.com/books",
            "github_repo": "https://github.com/chrislemus/Library-Books-DB",
            "thumbnail": require("../imgs/portfolio/thumbnails/p3-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 4,
            "project_name": "Analytics Dashboard",
            "description": "Interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming.",
            "live_demo_url": "https://chrislemus.github.io/Analytics-Dashboard/",
            "github_repo": "https://github.com/chrislemus/Analytics-Dashboard",
            "thumbnail": require("../imgs/portfolio/thumbnails/p4-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 5,
            "project_name": "Online Gallery",
            "description": " Fast and lightweight gallery app with a modern approach; communicates with a third-party API (Application Programming Interface).",
            "live_demo_url": "https://gallery-app-react.netlify.app/",
            "github_repo": "https://github.com/chrislemus/React-Gallery-App",
            "thumbnail": require("../imgs/portfolio/thumbnails/p5-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 6,
            "project_name": "OOP Game Show App",
            "description": 'Word guessing game: "Phrase Hunter" - Javascript and OOP (Object-Oriented Programming)',
            "live_demo_url": "https://chrislemus.github.io/OOP-Game-Show-App/",
            "github_repo": "https://github.com/chrislemus/OOP-Game-Show-App",
            "thumbnail": require("../imgs/portfolio/thumbnails/p6-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 7,
            "project_name": "Static Node Express Site",
            "description": "Node.js and Express portfolio site, using Pug templates for views",
            "live_demo_url": "https://static-node-express-site.herokuapp.com/",
            "github_repo": "https://github.com/chrislemus/static-node-express-site",
            "thumbnail": require("../imgs/portfolio/thumbnails/p7-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 8,
            "project_name": "Directory List Pagination",
            "description": 'Divide a long list into a series of "pages" and improve the user experience of web page.',
            "live_demo_url": "https://chrislemus.github.io/directory-list-pagination/",
            "github_repo": "https://github.com/chrislemus/directory-list-pagination",
            "thumbnail": require("../imgs/portfolio/thumbnails/p8-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 9,
            "project_name": "Interactive Form",
            "description": "Enhance form so that it’s engaging, interactive, and easy to use.",
            "live_demo_url": "https://chrislemus.github.io/Interactive-Form/",
            "github_repo": "https://github.com/chrislemus/Interactive-Form",
            "thumbnail": require("../imgs/portfolio/thumbnails/p9-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 10,
            "project_name": "Random Quote Generator",
            "description": "Random Quote Generator, a program that displays a randomly selected quote each time the user clicks a button.",
            "live_demo_url": "https://chrislemus.github.io/Random-Quote-Generator",
            "github_repo": "https://github.com/chrislemus/Random-Quote-Generator",
            "thumbnail": require("../imgs/portfolio/thumbnails/p10-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 11,
            "project_name": "Web Style Guide",
            "description": "Sass Web Style guide that can be used for other projects in front end development.",
            "live_demo_url": "https://chrislemus.github.io/web-style-guide-sass/",
            "github_repo": "https://github.com/chrislemus/web-style-guide-sass",
            "thumbnail": require("../imgs/portfolio/thumbnails/p11-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        },
        {
            "id": 12,
            "project_name": "Online Registration",
            "description": "A simple online newsletter sign up form.",
            "live_demo_url": "https://chrislemus.github.io/online-registration-form/",
            "github_repo": "https://github.com/chrislemus/online-registration-form",
            "thumbnail": require("../imgs/portfolio/thumbnails/p12-thumb.jpg"),
            "technologies": [htmlIcon, cssIcon, javascriptIcon, nodeJsIcon, express, react, pug]
        }
    ]

export default projects