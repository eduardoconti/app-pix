import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { signInRequest } from "@/services/api/auth";
import { api } from "@/services/api/api";
import jwt from "jwt-decode";
type User = {
  userName: string;
  userId: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      const { userName, userId } = jwt<{ userName: string; userId: string }>(
        token
      );
      setUser({ userId, userName });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", user.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${user.token}`;
    setUser(user);
    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
