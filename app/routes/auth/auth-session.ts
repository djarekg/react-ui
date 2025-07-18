import { getSession } from '@/session.server.js';

export type AuthSession = {
  isAuthenticated: boolean;
  username: string | null;
  token: string | null;
};

export const getAuthSession = async (request: Request): Promise<Omit<AuthSession, 'token'>> => {
  const session = await getSession(request.headers.get('Cookie'));
  const sessionString = await session.get('userId')!;
  const { token = null, username = null } = sessionString
    ? (JSON.parse(sessionString) as AuthSession)
    : {};
  return { username, isAuthenticated: !!token } as const;
};
