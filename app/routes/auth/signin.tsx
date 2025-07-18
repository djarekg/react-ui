import { useAuthContext } from '@/auth/auth.js';
import { getAuthSession } from '@/auth/auth-session.js';
import { commitSession, getSession } from '@/session.server.js';
import type { FormEvent, MouseEvent } from 'react';
import {
  redirect,
  useFetcher,
  useLocation,
  useNavigate,
  type ActionFunctionArgs,
} from 'react-router';

export const loader = async ({ request }: ActionFunctionArgs) => {
  const { isAuthenticated } = await getAuthSession(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  // Extract username from form data.
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

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();
  const fetcher = useFetcher();

  const handleSignin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Get the username from the form data and signin.
    const formData = new FormData(e.currentTarget.closest('form') as HTMLFormElement);
    const username = formData.get('username') as string;
    const isSignedIn = await auth.signin(username);

    if (isSignedIn) {
      // If sign-in is successful, submit the form data to the action so
      // that the session can be updated with the new user information.
      await fetcher.submit(formData, { method: 'post' });
      const from = location.state?.from || '/';

      // Redirect to the home page or the page they were trying to access.
      navigate(from, { replace: true });
    } else {
      // Handle sign-in failure (e.g., show an error message).
      console.error('Sign-in failed');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <button onClick={handleSignin}>Sign In</button>
      </form>
    </div>
  );
}
