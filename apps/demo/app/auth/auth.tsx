import { isNullOrEmpty } from '@/core/utils/string.js';
import { createContext, use, useState, type ReactNode } from 'react';

type AuthProvider = {
  isAuthenticated: boolean;
  username: null | string;
  signin(username: string, password: string): Promise<boolean>;
  signout(): Promise<void>;
};

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider: AuthProvider = {
  isAuthenticated: false,
  username: null,

  /**
   * Simulates signing in a user by setting the username and authentication status.
   * In a real application, this would involve API calls to authenticate the user.
   */
  async signin(username: string, password: string) {
    await new Promise(r => setTimeout(r, 500)); // fake delay

    if (isNullOrEmpty(username) || isNullOrEmpty(password)) {
      return false;
    }

    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.username = username;
    return true; // Simulate successful sign-in
  },

  /**
   * Simulates signing out a user by resetting the authentication status and username.
   * In a real application, this would involve API calls to log out the user.
   */
  async signout() {
    await new Promise(r => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.username = '';
  },
} as const;

/**
 * AuthProvider component that provides authentication state and methods
 * to its children components.
 *
 * @param {React.ReactNode} children - The child components that will have access to the authentication context.
 * @returns {JSX.Element} The AuthContext provider wrapping the children.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Simulates signing in a user by calling the fakeAuthProvider's signin method,
   * updating the username and authentication status, and optionally calling a callback.
   */
  const signin = async (newUsername: string, password: string) => {
    const result = await fakeAuthProvider.signin(newUsername, password);

    if (result) {
      setUsername(newUsername);
    }

    setIsAuthenticated(result);

    return result;
  };

  /**
   * Simulates signing out a user by calling the fakeAuthProvider's signout method,
   * resetting the username and authentication status, and optionally calling a callback.
   */
  const signout = async () => {
    await fakeAuthProvider.signout();
    setUsername(null);
    setIsAuthenticated(false);
  };

  const value = { username, isAuthenticated, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Context for authentication state and methods.
 * This context provides access to the authentication state and methods
 * for signing in and signing out.
 */
const AuthContext = createContext<AuthProvider>({} as AuthProvider);

/**
 * Custom hook to access the authentication context.
 * This hook provides access to the authentication state and methods.`
 * It should be used within a component that is wrapped in the AuthProvider.
 *
 * @returns {AuthProvider} The authentication context value.
 */
export const useAuth = () => use(AuthContext);
