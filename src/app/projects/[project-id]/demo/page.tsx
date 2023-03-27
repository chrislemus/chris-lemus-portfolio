'use client';
import { useEffect, useState, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './page.module.scss';
import {
  faServer,
  faSpaceShuttle,
  faUserAstronaut,
  faPeopleCarry,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { portfolioAll } from '@root/src/content';
import { theme } from '@root/src/app/layout';

const transitionTime = 900;

const initialState = { progress: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'incrementProgress':
      return { ...state, progress: state.progress + 1 };
    default:
      throw new Error();
  }
}
export default function projectDemoRedirect(p) {
  const projectId = p.params['project-id'] as string;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progressIntervalId, setProgressIntervalId] = useState(null);
  const [labelOpacity, setLabelOpacity] = useState(1);
  const incrementProgress = () => dispatch({ type: 'incrementProgress' });
  const getProject = () =>
    portfolioAll.find(({ id }) => id === parseInt(projectId));
  const [progressText, setProgressText] = useState({
    icon: faServer,
    label: 'Booting up server',
  });
  const goToLiveDemo = () => {
    const project = getProject();
    window.location.assign(project.demoUrl);
  };
  const triggerTransition = () => {
    setLabelOpacity(0);
    setTimeout(() => setLabelOpacity(1), transitionTime);
  };

  const setProgressInterval = () => {
    const intervalId = setInterval(incrementProgress, 160);
    setProgressIntervalId(intervalId);
    return () => clearInterval(intervalId);
  };

  const updateDynamicText = () => {
    const [icon, label] = getTextContent(state.progress);
    if (progressText.label !== label) {
      triggerTransition();
      setTimeout(() => setProgressText({ icon, label }), transitionTime);
    }
  };
  const redirectToLiveDemo = () => {
    if (projectId) {
      const project = getProject();
      if (project?.serverWakeUpUrl) {
        fetch(project?.serverWakeUpUrl, { mode: 'no-cors' }).then(goToLiveDemo);
      } else {
        goToLiveDemo();
      }
    }
  };
  useEffect(setProgressInterval, []);
  useEffect(updateDynamicText, [state.progress]);
  useEffect(redirectToLiveDemo, [projectId]);
  useEffect(() => {
    if (state.progress >= 97) {
      goToLiveDemo();
      clearInterval(progressIntervalId);
    }
  }, [state.progress]);

  return (
    <div className={styles.root}>
      <div
        style={{
          color: theme.palette.primary.main,
          fontSize: '3rem',
          transition: `opacity ${transitionTime}ms`,
          opacity: labelOpacity,
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          <FontAwesomeIcon size="sm" icon={progressText.icon} />
          <br />
          {progressText.label}
        </Typography>
      </div>
      <LinearProgressWithLabel value={state.progress} />
    </div>
  );
}
function getTextContent(progress): [IconDefinition, string] {
  switch (true) {
    case progress < 15:
      return [faServer, 'Booting up server'];
    case progress < 45:
      return [faPeopleCarry, 'Delivering packages'];
    case progress < 75:
      return [faUserAstronaut, 'Preparing for takeoff'];
    default:
      return [faSpaceShuttle, 'Finalizing'];
  }
}

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
