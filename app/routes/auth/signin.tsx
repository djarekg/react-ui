import { useAuthContext } from '@/auth/auth.js';
import { getAuthSession } from '@/routes/auth/auth-session.js';
import { commitSession, getSession } from '@/session.server.js';
import type { FormEvent } from 'react';
import {
  redirect,
  useFetcher,
  useLocation,
  useNavigate,
  type ActionFunctionArgs,
} from 'react-router';

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const token = crypto.randomUUID(); // Simulate a token generation

  // Store the user information in the session.
  session.set(
    'userId',
    JSON.stringify({
      username,
      token,
    })
  );

  // Login succeeded, send them to the home page.
  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const loader = async ({ request }: ActionFunctionArgs) => {
  const { isAuthenticated } = await getAuthSession(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return null;
};

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();
  const fetcher = useFetcher();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const isSignedIn = await auth.signin(username);

    if (isSignedIn) {
      await fetcher.submit(username, { method: 'post', action: '/auth/signin' });
      const from = location.state?.from || '/';

      // Redirect to the home page or the page they were trying to access
      navigate(from, { replace: true });
    } else {
      // Handle sign-in failure (e.g., show an error message)
      console.error('Sign-in failed');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
