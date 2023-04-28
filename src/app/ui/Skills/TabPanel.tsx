import { Tab } from '@headlessui/react';

type TabPanelProps = {
  /** Tab panel image source */
  imgSrc: string;
  /** Tab panel image alt */
  imgAlt: string;
};

/** Tab panel component */
export const TabPanel: React.FC<TabPanelProps> = (p) => {
  const { imgSrc, imgAlt } = p;
  return (
    <Tab.Panel className="flex flex-col sm:flex-row bg-base-100 max-w-5xl">
      <figure className="flex-1">
        <img
          src={imgSrc}
          alt={imgAlt}
          className=" max-h-64 lg:max-h-72 mx-auto"
        />
      </figure>
      <div className="flex-1 p-3 flex flex-col justify-center z-10 bg-base-100">
        {p.children}
      </div>
    </Tab.Panel>
  );
};
