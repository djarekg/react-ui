import { getAuthSession } from '@/auth/auth-session.js';
import { useAuth } from '@/auth/auth.js';
import { commitSession, getSession } from '@/session.server.js';
import LoginOutlined from '@mui/icons-material/LoginOutlined';
import PasswordRounded from '@mui/icons-material/PasswordRounded';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { type MouseEvent } from 'react';
import {
  redirect,
  useFetcher,
  useLocation,
  useNavigate,
  type ActionFunctionArgs,
} from 'react-router';
import './signin.css';

export const loader = async ({ request }: ActionFunctionArgs) => {
  'use memo';

  const { isAuthenticated } = await getAuthSession(request);

  if (isAuthenticated) {
    return redirect('/');
  }

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  'use memo';

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
  'use memo';

  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const { signin } = useAuth();
  const fetcher = useFetcher();

  const handleSignin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Get the username from the form data and signin.
    const formData = new FormData(e.currentTarget.closest('form') as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const isSignedIn = await signin(username, password);

    if (isSignedIn) {
      // If sign-in is successful, submit the form data to the action so
      // that the session can be updated with the new user information.
      await fetcher.submit(formData, { method: 'post' });
      const from = locationState?.from || '/';

      // Redirect to the home page or the page they were trying to access.
      navigate(from, { replace: true, viewTransition: true });
    } else {
      // Handle sign-in failure (e.g., show an error message).
      console.error('Sign-in failed');
    }
  };

  return (
    <div className="signin-container">
      <form>
        <h2>Sign In</h2>
        <TextField
          variant="outlined"
          name="username"
          label="Username"
          required
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <PersonOutlineRounded />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type="password"
          required
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordRounded />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="outlined"
          endIcon={<LoginOutlined />}
          onClick={handleSignin}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
