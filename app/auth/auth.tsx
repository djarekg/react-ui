import { createContext, useContext, useState } from 'react';

interface AuthProvider {
  isAuthenticated: boolean;
  username: null | string;
  signin(username: string): Promise<boolean>;
  signout(): Promise<void>;
}

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
  async signin(username: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.username = username;
    return true; // Simulate successful sign-in
  },

  /**
   * Simulates signing out a user by resetting the authentication status and username.
   * In a real application, this would involve API calls to log out the user.
   */
  async signout() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.username = '';
  },
};

/**
 * AuthProvider component that provides authentication state and methods
 * to its children components.
 *
 * @param {React.ReactNode} children - The child components that will have access to the authentication context.
 * @returns {JSX.Element} The AuthContext provider wrapping the children.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Simulates signing in a user by calling the fakeAuthProvider's signin method,
   * updating the username and authentication status, and optionally calling a callback.
   */
  const signin = async (newUsername: string) => {
    const result = await fakeAuthProvider.signin(newUsername);
    setUsername(newUsername);
    setIsAuthenticated(true);
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
const AuthContext = createContext<AuthProvider>(null!);

/**
 * Custom hook to access the authentication context.
 * This hook provides access to the authentication state and methods.
 * It should be used within a component that is wrapped in the AuthProvider.
 *
 * @returns {AuthProvider} The authentication context value.
 */
export const useAuthContext = () => {
  return useContext(AuthContext);
};
