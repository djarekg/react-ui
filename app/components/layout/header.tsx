import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  header: {
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase400,
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',

    '& ul': {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/">
              <img src="react-logo.svg" alt="React Logo" width="30" height="30" />
            </a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/customers">Customers</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
