import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100% - var(--app-header-height))',
  },
  title: {
    fontSize: tokens.fontSizeHero1000,
    fontWeight: tokens.fontWeightSemibold,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.title}>Home</span>
    </div>
  );
}
