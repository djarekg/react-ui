import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('signin', 'routes/auth/signin.tsx'),
  route('signout', 'routes/auth/signout.tsx'),
  ...prefix('admin', [
    index('routes/admin/index.tsx'),
    route('settings', 'routes/admin/settings.tsx'),
  ]),
  ...prefix('customers', [
    index('routes/customers/index.tsx'),
    ...prefix(':id', [index('routes/customers/[id]/index.tsx')]),
  ]),
  ...prefix('users', [
    index('routes/users/index.tsx'),
    ...prefix(':id', [index('routes/users/[id]/index.tsx')]),
  ]),
  ...prefix('products', [
    index('routes/products/index.tsx'),
    ...prefix(':id', [index('routes/products/[id]/index.tsx')]),
  ]),
] satisfies RouteConfig;
