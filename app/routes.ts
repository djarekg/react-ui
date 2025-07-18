import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('signin', 'routes/auth/signin.tsx'),
  ...prefix('users', [
    index('routes/users/index.tsx'),
    ...prefix(':id', [
      index('routes/users/[id]/index.tsx'),
      route('settings', 'routes/users/[id]/settings.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
