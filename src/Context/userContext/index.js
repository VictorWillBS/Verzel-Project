import { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
const userContext = createContext();

export default userContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}
