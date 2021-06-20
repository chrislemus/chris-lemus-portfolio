import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';

const decorationStyles = {
  position: 'absolute',
  zIndex: -1,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: '2rem',
    paddingBottom: '8rem',
    minHeight: '940px',
  },
  skillImg: {
    width: '100%',
  },
  imageWrapper: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      marginBottom: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  tabContent: {
    display: 'flex',
    padding: '3rem 0',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1200px',
    justifyContent: 'center',
    alignItems: 'center',
    '&[hidden]': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  tabsWrapper: {
    margin: '0 auto',
  },
  textContent: {
    ...theme.typography.body1,
    width: '40%',
    paddingLeft: '3rem ',
    color: theme.palette.text.secondary,
    background: '#fff',
    '& a': {
      color: theme.palette.info.main,
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      paddingTop: '1rem',
    },
  },
  decorationWater: {
    ...decorationStyles,
    right: '10%',
    top: '5%',
  },
  decorationCircle: {
    ...decorationStyles,
    left: '2%',
    bottom: '15%',
  },
  decorationSquare: {
    ...decorationStyles,
    left: '12%',
    bottom: '0%',
  },
  decorationHalfCircle: {
    ...decorationStyles,
    left: '12%',
    bottom: '50%',
  },
}));

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const tabsLabelAndImage = [
  { label: 'Code', image: './images/skills/code.svg' },
  { label: 'Business', image: './images/skills/business.svg' },
  { label: 'Media', image: './images/skills/media.svg' },
  { label: 'Marketing', image: './images/skills/marketing.svg' },
];

export default function Skills() {
  const [value, setValue] = useState(0);
  const [offset, setOffset] = useState(0);
  const rootElRef = useRef();
  const [largestHeight, setLargestHeight] = useState(0);
  const classes = useStyles();

  const updateLargetHeight = () => {
    const currentHeight = rootElRef.current.offsetHeight;
    largestHeight < currentHeight && setLargestHeight(currentHeight);
  };
  useEffect(() => {
    window.addEventListener('scroll', parallaxShift);
    return () => window.removeEventListener('scroll', parallaxShift);
  }, []);
  useEffect(() => updateLargetHeight(), []);
  const parallaxShift = () => setOffset(window.pageYOffset);

  return (
    <div className={classes.root} id="skills" ref={rootElRef}>
      <Box textAlign="center" mt={10} mb={5}>
        <Typography variant="h2" component="h3">
          My Skills
        </Typography>
      </Box>
      <img
        src="./images/decorations/water-splash.svg"
        alt="water-splash"
        className={classes.decorationWater}
      />
      <img
        src="./images/decorations/sm-circle.svg"
        alt="circle"
        className={classes.decorationCircle}
        style={{ bottom: offset / 20 }}
      />
      <img
        src="./images/decorations/sm-square.svg"
        alt="square"
        className={classes.decorationSquare}
        style={{ bottom: offset / 60 }}
      />
      <img
        src="./images/decorations/sm-half-circle.svg"
        alt="half-circle"
        className={classes.decorationHalfCircle}
        style={{ bottom: offset / 5 }}
      />
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={(e, newValue) => {
          updateLargetHeight();
          setValue(newValue);
        }}
        aria-label="skills tabs"
        className={classes.tabsWrapper}
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
          <a
            href="https://developers.google.com/speed/pagespeed/insights/?url=chrislemus.io&tab=desktop"
            {...externalLinkProps}
          >
            {' '}
            View this site PageSpeed
          </a>
        </p>
        <ul>
          <li>JavaScript ES6 / JQuery</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>HTML5 stack</li>
          <li>MySQL</li>
          <li>Express</li>
          <li>PaaS(Heroku)</li>
          <li>Node JS</li>
          <li>Git</li>
          <li>React</li>
          <li>Bootstrap and other front-end frameworks</li>
        </ul>
      </CustomTab>
      <CustomTab value={value} index={1}>
        <p>
          As someone who started two local service businesses, I will use my
          experience to deliver a product that is tailored to your
          project/business goals. *check out businesses below
        </p>
        <ul>
          <li>
            <a href="https://www.maidsnextdoor.com/" {...externalLinkProps}>
              Maids Next Door
            </a>
            : extensive use of data analytics for automatic scheduling,
            dispatch, and pricing
          </li>
          <li>
            <a href="https://ncpropainters.com/" {...externalLinkProps}>
              NC Pro Painters
            </a>
            : Managing large scale projects/crews, making sure everything is on
            schedule. And service is delivered to customer as promised.
          </li>
        </ul>
      </CustomTab>
      <CustomTab value={value} index={2}>
        <p>
          In depth knowledge of Video/Image formats: Through my freelance work I
          have developed skills with PhotoShop, Premiere Pro, After Effects, and
          other Adobe Suite programs. Video has proven to help with branding and
          increase site conversion rate. Check out my latest projects below.
        </p>
        <ul>
          <li>
            <a
              href="https://maidsnextdoor.wistia.com/medias/sizbswz78p"
              {...externalLinkProps}
            >
              Maids Next Door Promo, Raleigh NC
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/389623594" {...externalLinkProps}>
              {' '}
              Anchor Auto Outlet Promo, Cary NC
            </a>
          </li>
        </ul>
      </CustomTab>
      <CustomTab value={value} index={3}>
        <p>
          If content is King and distribution is Queen, why work on a project
          that people have a hard time finding? With my experience of online
          SEO, I will make sure your project follows the search engine
          guidelines. This will give your project a better chance at appearing
          on top of search engine results for your audience to find.
        </p>
        <p>
          <a
            href="https://www.google.com/search?q=maids+next+door"
            {...externalLinkProps}
          >
            Click here{' '}
          </a>
          for example of Maids Next Door
        </p>
      </CustomTab>
    </div>
  );
}

function CustomTab({ children, value, index }) {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.tabContent}
    >
      <div className={classes.imageWrapper}>
        <img
          src={tabsLabelAndImage[value].image}
          alt={tabsLabelAndImage[value].label}
          className={classes.skillImg}
        />
      </div>
      <div className={classes.textContent}>{children}</div>
    </div>
  );
}
