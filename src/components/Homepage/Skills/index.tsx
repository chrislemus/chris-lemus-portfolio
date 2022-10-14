import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import Typography from '@material-ui/core/Typography';
import { BackgroundDecorations } from './BackgroundDecorations';

const tabsLabelAndImage = [
  { label: 'Code', image: './images/skills/code.svg' },
  { label: 'Business', image: './images/skills/business.svg' },
  { label: 'Media', image: './images/skills/media.svg' },
  { label: 'Marketing', image: './images/skills/marketing.svg' },
];

function Link(p: { children: any; href: string }) {
  return (
    <a href={p.href} target="blank" rel="noopener noreferrer">
      {p.children}
    </a>
  );
}

export default function Skills() {
  const [value, setValue] = useState(0);

  const rootElRef = useRef();
  const [largestHeight, setLargestHeight] = useState(0);

  const updateLargestHeight = () => {
    const currentHeight = rootElRef.current?.offsetHeight;
    largestHeight < currentHeight && setLargestHeight(currentHeight);
  };

  useEffect(updateLargestHeight, [updateLargestHeight]);

  return (
    <div className={styles.root} id="skills" ref={rootElRef}>
      <Box textAlign="center" mt={10} mb={5}>
        <Typography variant="h2" component="h3">
          My Skills
        </Typography>
      </Box>
      <BackgroundDecorations />

      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={(e, newValue) => {
          updateLargestHeight();
          setValue(newValue);
        }}
        aria-label="skills tabs"
        className={styles.tabsWrapper}
      >
        {tabsLabelAndImage.map(({ label }, idx) => (
          <Tab
            label={label}
            id={`simple-tab-${idx}`}
            aria-label={`tabpanel-${idx}`}
            key={'tab' + label}
          />
        ))}
      </Tabs>
      <CustomTab value={value} index={0}>
        <p>
          Full Stack Javascript Developer. Creating responsive and fast WebApps.
        </p>
        <ul>
          <li>JavaScript ES6 / JQuery</li>
          <li>Ruby on Rails</li>
          <li>Redux</li>
          <li>Docker</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>HTML5 stack</li>
          <li>MySQL,PostgreSQL, and other Structured Query Language</li>
          <li>Express</li>
          <li>PaaS(Heroku)</li>
          <li>Node JS</li>
          <li>Git</li>
          <li>React</li>
          <li>
            Bootstrap, Material UI, AntDesign, and other styling frameworks
          </li>
        </ul>
      </CustomTab>
      <CustomTab value={value} index={1}>
        <p>
          As someone who started two local service businesses, I will use my
          experience to deliver a product that is tailored to your
          project/business goals. And provide a great user experience to
          maintain a reputable online presence.
        </p>
        <Box boxShadow={3}>
          <img
            src="/images/skills/maids-next-door-google-rating.jpeg"
            height="100px"
          />
        </Box>
      </CustomTab>
      <CustomTab value={value} index={2}>
        <p>
          In-depth knowledge of Video/Image formats: Through my freelance work,
          I have developed skills with PhotoShop, Premiere Pro, After Effects,
          and other Adobe Suite programs. Video has proven to help with branding
          and increase site conversion rate. Check out my latest projects below.
        </p>
        <ul>
          <li>
            <Link href="https://maidsnextdoor.wistia.com/medias/sizbswz78p">
              Maids Next Door Promo, Raleigh NC
            </Link>
          </li>
          <li>
            <Link href="https://vimeo.com/389623594">
              Anchor Auto Outlet Promo, Cary NC
            </Link>
          </li>
        </ul>
      </CustomTab>
      <CustomTab value={value} index={3}>
        <p>
          If content is king and distribution is Queen, why work on a project
          that people have a hard time finding? With my experience in online
          SEO, I will make sure your project follows the search engine
          guidelines. And give your project a better chance at appearing on top
          of search engine results for your audience to find.
        </p>
      </CustomTab>
    </div>
  );
}

function CustomTab(p: { children: any; value: number; index: number }) {
  return (
    <div
      role="tabpanel"
      hidden={p.value !== p.index}
      id={`simple-tabpanel-${p.index}`}
      aria-labelledby={`simple-tab-${p.index}`}
      className={styles.tabContent}
    >
      <div className={styles.imageWrapper}>
        <img
          src={tabsLabelAndImage[p.value].image}
          alt={tabsLabelAndImage[p.value].label}
          className={styles.skillImg}
        />
      </div>
      <div className={styles.textContent}>{p.children}</div>
    </div>
  );
}
