import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    color: 'blue',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
