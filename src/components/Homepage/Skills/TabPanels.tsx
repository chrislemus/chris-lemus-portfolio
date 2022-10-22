import { TabPanel } from '@app/components/Homepage/Skills/TabPanel';
import { tabsContent } from '@app/components/Homepage/Skills/tabs-content';
import { Box } from '@material-ui/core';

type TabPanelsProps = {
  /** value of active tab */
  value: number;
};

/** Collection of tab panels */
export const TabPanels: React.FC<TabPanelsProps> = (p) => {
  return (
    <>
      <TabPanel
        value={p.value}
        index={0}
        imgSrc={tabsContent[0].image}
        imgAlt={tabsContent[0].label}
      >
        <p>
          Full Stack Software Engineer, crafting the optimal user experience on
          the front end and continuously deploying scalable/reliable back-end
          services.
        </p>
        <ul>
          <li>JavaScript / Typescript</li>
          <li>React / Angular</li>
          <li>Ruby on Rails</li>
          <li>Shell Scripting</li>
          <li>Redux</li>
          <li>Docker</li>
          <li>CSS3 / SASS</li>
          <li>HTML5</li>
          <li>MySQL,PostgreSQL, and other Structured Query Language</li>
          <li>Amazon Cloud Services</li>
          <li>PaaS(Heroku)</li>
          <li>Node JS</li>
          <li>Git</li>
          <li>Styling Frameworks</li>
        </ul>
      </TabPanel>
      <TabPanel
        value={p.value}
        index={1}
        imgSrc={tabsContent[1].image}
        imgAlt={tabsContent[1].label}
      >
        <p>
          As someone who started two local service businesses, I will use my
          experience to deliver a product that is tailored to your
          project/business goals. And provide a great user experience to
          maintain a reputable online presence.
        </p>
        <Box boxShadow={3}>
          <img
            src="/images/skills/maids-next-door-google-rating.jpeg"
            // height="100px"
            width="100%"
          />
        </Box>
      </TabPanel>
      <TabPanel
        value={p.value}
        index={2}
        imgSrc={tabsContent[2].image}
        imgAlt={tabsContent[2].label}
      >
        <p>
          In-depth knowledge of Video/Image formats: Through my freelance work,
          I have developed skills with PhotoShop, Premiere Pro, After Effects,
          and other Adobe Suite programs. Video has proven to help with branding
          and increase site conversion rate. Check out my latest projects below.
        </p>
        <ul>
          <li>
            <a
              href="https://maidsnextdoor.wistia.com/medias/sizbswz78p"
              target="blank"
              rel="noopener noreferrer"
            >
              Maids Next Door Promo, Raleigh NC
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/389623594"
              target="blank"
              rel="noopener noreferrer"
            >
              Anchor Auto Outlet Promo, Cary NC
            </a>
          </li>
        </ul>
      </TabPanel>
      <TabPanel
        value={p.value}
        index={3}
        imgSrc={tabsContent[3].image}
        imgAlt={tabsContent[3].label}
      >
        <p>
          If content is king and distribution is Queen, why work on a project
          that people have a hard time finding? With my experience in online
          SEO, I will make sure your project follows the search engine
          guidelines. And give your project a better chance at appearing on top
          of search engine results for your audience to find.
        </p>
      </TabPanel>
    </>
  );
};
