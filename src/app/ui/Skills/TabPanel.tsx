import styles from './TabPanel.module.scss';

type TabPanelProps = {
  /** value of active tab */
  value: number;
  /** index of current tab */
  index: number;
  /** Tab panel image source */
  imgSrc: string;
  /** Tab panel image alt */
  imgAlt: string;
};

/** Tab panel component */
export const TabPanel: React.FC<TabPanelProps> = (p) => {
  return (
    <div
      role="tabpanel"
      hidden={p.value !== p.index}
      id={`simple-tabpanel-${p.index}`}
      aria-labelledby={`simple-tab-${p.index}`}
      className={styles.root}
    >
      <div className={styles.tabPanelImgContainer}>
        <img src={p.imgSrc} alt={p.imgAlt} className={styles.tabPanelImg} />
      </div>
      <div className={styles.textContent}>{p.children}</div>
    </div>
  );
};
