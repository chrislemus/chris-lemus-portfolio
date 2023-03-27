import { useWindowOffset } from '@root/src/hooks';
import styles from './BackgroundDecorations.module.scss';

export const BackgroundDecorations: React.FC = () => {
  const offset = useWindowOffset();

  return (
    <>
      <img
        src="./images/decorations/water-splash.svg"
        alt="water-splash"
        className={styles.decorationWater}
      />
      <img
        src="./images/decorations/sm-circle.svg"
        alt="circle"
        className={styles.decorationCircle}
        style={{ bottom: offset / 5 }}
      />
      <img
        src="./images/decorations/sm-square.svg"
        alt="square"
        className={styles.decorationSquare}
        style={{ bottom: offset / 60 }}
      />
      <img
        src="./images/decorations/sm-half-circle.svg"
        alt="half-circle"
        className={styles.decorationHalfCircle}
        style={{ bottom: offset / 3 }}
      />
    </>
  );
};
