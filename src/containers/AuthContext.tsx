import { createContext } from 'react';

const AuthContext = createContext({
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
});

export default AuthContext;
