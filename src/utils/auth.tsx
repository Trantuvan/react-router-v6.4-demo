import { createContext, ReactNode, useContext, useState } from "react";

type State = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

const AuthContext = createContext<State | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>("");

  const login = (user: string) => setUser(user);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContext");
  }
  return context;
};

export { AuthProvider, useAuth };
