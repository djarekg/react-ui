import type { Route } from '@/+types/app/+types/root.js';
import { getAuthSession } from '@/auth/auth-session.js';
import { AuthProvider } from '@/auth/auth.js';
import Header from '@/components/layout/header.js';
import { SidenavProvider } from '@/components/sidenav/sidenav-provider.js';
import Sidenav from '@/components/sidenav/sidenav.js';
import styles from '@/styles/styles.css?url';
import { CacheProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router';
import createEmotionCache from './createCache.js';
import AppTheme from './styles/theme.js';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const { isAuthenticated } = await getAuthSession(request);
  const { pathname } = new URL(request.url);

  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/signin` with a `from` parameter that allows signin to redirect back
  // to this page upon successful authentication.
  if (!isAuthenticated && !/\/signin/.test(pathname)) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/signin?' + params.toString());
  }

  return { isAuthenticated };
};

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: 'react-logo.svg',
  },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useLoaderData<typeof loader>();

  return (
    <CacheProvider value={cache}>
      <AppTheme>
        <AuthProvider>
          <SidenavProvider>
            <Header isAuthenticated={isAuthenticated} />
            <main>
              <Sidenav />
              <Outlet />
            </main>
          </SidenavProvider>
        </AuthProvider>
      </AppTheme>
    </CacheProvider>
  );
};

const cache = createEmotionCache();

export default function App() {
  if (typeof window !== 'undefined') {
    return (
      <CacheProvider value={cache}>
        <AppContent />
      </CacheProvider>
    );
  }

  return <AppContent />;
}

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <Box component="main" sx={{ pt: 8, p: 2, maxWidth: 'lg', mx: 'auto' }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <Box component="pre" sx={{ width: '100%', p: 2, overflowX: 'auto' }}>
          <code>{stack}</code>
        </Box>
      )}
    </Box>
  );
};
