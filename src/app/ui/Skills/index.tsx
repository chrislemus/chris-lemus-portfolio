'use client';
import { Fragment, useState } from 'react';
import { tabsContent } from './tabs-content';
import { Tab, Transition } from '@headlessui/react';
import cn from 'classnames';
import { TabPanel } from './TabPanel';
import { useWindowScroll } from 'react-use';

export default function Skills() {
  const [selectedIndex, _setSelectedIndex] = useState(0);
  const [cardDisplayed, setCardDisplayed] = useState(true);

  const setSelectedIndex = (idx: number) => {
    setCardDisplayed(false);
    setTimeout(() => {
      _setSelectedIndex(idx);
      setCardDisplayed(true);
    }, 100);
  };
  const { y } = useWindowScroll();

  return (
    <section
      className="flex flex-col bg-base-100 py-40 relative min-h-screen "
      id="skills"
    >
      <h1 className="text-6xl sm:text-8xl font-bold text-center pb-14">
        My Skills
      </h1>

      <img
        className="absolute right-10"
        src="./images/decorations/water-splash.svg"
        alt="water-splash"
      />
      <img
        className="absolute left-1/4 top-1/4 animate-pulse"
        src="./images/decorations/sm-half-circle.svg"
        alt="half-circle"
        style={{ bottom: y / 5 }}
      />
      <img
        className="absolute left-14 animate-pulse"
        src="./images/decorations/sm-circle.svg"
        alt="circle"
        style={{ bottom: y / 5 }}
      />
      <img
        className="absolute left-1/4 bottom-0 animate-pulse"
        src="./images/decorations/sm-square.svg"
        alt="square"
        style={{ bottom: y / 12 }}
      />
      <img
        className="absolute right-1/4 bottom-1/4 animate-pulse rotate-180"
        src="./images/decorations/sm-half-circle.svg"
        alt="half-circle"
        style={{ bottom: y / 15 }}
      />
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="tabs flex justify-center py-20">
          {tabsContent.map(({ label }) => (
            <Tab as={Fragment} key={`skill-tab-${label}`}>
              {({ selected }) => (
                <a
                  className={cn(
                    'tab tab-lg tab-bordered border-x-0 border-t-0',
                    {
                      'tab-active': selected,
                    }
                  )}
                >
                  {label}
                </a>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Transition
          show={cardDisplayed}
          enter="transition-opacity ease-linear duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Tab.Panels className="flex justify-center">
            <TabPanel
              imgSrc={tabsContent[0].image}
              imgAlt={tabsContent[0].label}
            >
              <p>
                Full Stack Software Engineer, crafting the optimal user
                experience on the front end and continuously deploying
                scalable/reliable back-end services.
              </p>
              <ul className="list-inside list-disc pt-5 grid grid-cols-2">
                <li>JavaScript / Typescript</li>
                <li>React / Angular</li>
                <li>Ruby on Rails</li>
                <li>Shell Scripting</li>
                <li>Redux</li>
                <li>Docker</li>
                <li>CSS3 / SASS</li>
                <li>HTML5</li>
                <li>Sql/NoSql Databases</li>
                <li>Amazon Web Services</li>
                <li>CICD</li>
                <li>Node JS</li>
                <li>Git</li>
                <li>Styling Frameworks</li>
              </ul>
            </TabPanel>

            <TabPanel
              imgSrc={tabsContent[1].image}
              imgAlt={tabsContent[1].label}
            >
              <p className="pb-10">
                As someone who started two local service businesses, I will use
                my experience to deliver a product that is tailored to your
                project/business goals. And provide a great user experience to
                maintain a reputable online presence.
              </p>
              <img
                src="/images/skills/maids-next-door-google-rating.jpeg"
                className="shadow-md w-10/12 mx-auto cursor-none"
                width="100%"
              />
            </TabPanel>

            <TabPanel
              imgSrc={tabsContent[2].image}
              imgAlt={tabsContent[2].label}
            >
              <p>
                In-depth knowledge of Video/Image formats: Through my freelance
                work, I have developed skills with PhotoShop, Premiere Pro,
                After Effects, and other Adobe Suite programs. Video has proven
                to help with branding and increase site conversion rate. Check
                out my latest projects below.
              </p>
              <ul className="list-inside list-disc pt-5">
                <li>
                  <a
                    href="https://maidsnextdoor.wistia.com/medias/sizbswz78p"
                    target="blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Maids Next Door Promo, Raleigh NC
                  </a>
                </li>
                <li>
                  <a
                    href="https://vimeo.com/389623594"
                    target="blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Anchor Auto Outlet Promo, Cary NC
                  </a>
                </li>
              </ul>
            </TabPanel>

            <TabPanel
              imgSrc={tabsContent[3].image}
              imgAlt={tabsContent[3].label}
            >
              <p>
                If content is king and distribution is Queen, why work on a
                project that people have a hard time finding? With my experience
                in online SEO, I will make sure your project follows the search
                engine guidelines. And give your project a better chance at
                appearing on top of search engine results for your audience to
                find.
              </p>
            </TabPanel>
          </Tab.Panels>
        </Transition>
      </Tab.Group>
    </section>
  );
}
