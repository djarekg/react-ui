import { isNullOrEmpty } from '@/core/utils/string.js';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Link from '@mui/material/Link';
import { lazy, memo, useMemo } from 'react';
import { useLocation } from 'react-router';

const MuiBreadcrumbs = lazy(() => import('@mui/material/Breadcrumbs'));
const NavigateNextOutlined = lazy(() => import('@mui/icons-material/NavigateNextOutlined'));

const HomeLink = memo(() => (
  <Link
    href="/"
    color="inherit"
    sx={{ columnGap: '0 !important' }}>
    <HomeOutlined
      sx={{ mr: 1 }}
      fontSize="small"
    />
    Home
  </Link>
));

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = useMemo(() => pathname.split('/').filter(x => !isNullOrEmpty(x)), [pathname]);

  if (pathnames.length === 0) {
    // return <HomeLink />;
    return null;
  }

  return (
    <MuiBreadcrumbs separator={<NavigateNextOutlined />}>
      <HomeLink />
      {pathnames.map((name, index) => {
        const route = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <Link
            href={route}
            key={name}
            color="inherit">
            {name}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
