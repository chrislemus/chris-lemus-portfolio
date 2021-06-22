import { useEffect, useState, useReducer } from 'react';
import projectsData from '../../data/projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faSpaceShuttle,
  faUserAstronaut,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const transitionTime = 900;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    width: '70%',
    margin: '0 auto',
    maxWidth: '500px',
  },
  dynamicText: {
    color: theme.palette.primary.main,
    fontSize: '3rem',
    transition: `opacity ${transitionTime}ms`,
  },
}));

const initialState = { progress: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'incrementProgress':
      return { ...state, progress: state.progress + 1 };
    default:
      throw new Error();
  }
}
export default function projectDemoRedirect() {
  const classes = useStyles();
  const router = useRouter();
  const projectId = router.query.id;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [progressIntervalId, setProgressIntervalId] = useState();
  const [labelOpacity, setLabelOpacity] = useState(1);
  const incrementProgress = () => dispatch({ type: 'incrementProgress' });
  const getProject = () =>
    projectsData.find(({ id }) => id === parseInt(projectId));
  const [progressText, setProgressText] = useState({
    icon: faServer,
    label: 'Booting up server',
  });
  const goToLiveDemo = () => {
    const project = getProject();
    window.location.assign(project.liveDemoUrl);
  };
  const triggerTransition = () => {
    setLabelOpacity(0);
    setTimeout(() => setLabelOpacity(1), transitionTime);
  };

  const setProgressInterval = () => {
    const intervalId = setInterval(incrementProgress, 140);
    setProgressIntervalId(intervalId);
    return () => clearInterval(intervalId);
  };

  const updateDynamicText = () => {
    const [icon, newLabel] = getTextContent(state.progress);
    if (progressText.label !== newLabel) {
      triggerTransition();
      setTimeout(
        () => setProgressText({ icon, label: newLabel }),
        transitionTime
      );
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
    <div className={classes.root}>
      <div className={classes.dynamicText} style={{ opacity: labelOpacity }}>
        <Typography variant="h4" component="h1" align="center">
          <FontAwesomeIcon icon={progressText.icon} />
          <br />
          {progressText.label}
        </Typography>
      </div>
      <LinearProgressWithLabel value={state.progress} />
    </div>
  );
}
function getTextContent(progress) {
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
