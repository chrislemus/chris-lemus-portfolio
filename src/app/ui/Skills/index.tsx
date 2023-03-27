import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import styles from './Skills.module.scss';
import Typography from '@mui/material/Typography';
import { BackgroundDecorations } from './BackgroundDecorations';
import { tabsContent } from './tabs-content';
import { TabPanels } from './TabPanels';

export default function Skills() {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.root} id="skills">
      <Box textAlign="center" mt={10} mb={5}>
        <Typography variant="h2" component="h3">
          My Skills
        </Typography>
      </Box>
      <BackgroundDecorations />

      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={(_e, newValue) => setValue(newValue)}
        aria-label="skills tabs"
        className={styles.tabsContainer}
      >
        {tabsContent.map(({ label }, idx) => (
          <Tab label={label} key={`skill-tab-${idx}`} />
        ))}
      </Tabs>
      <TabPanels value={value} />
    </div>
  );
}
