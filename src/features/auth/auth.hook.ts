import { useState, useEffect, useCallback } from 'react';
import { login, logout, getCurrentUser, LoginCredentials, AuthUser } from './auth.service';

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogin = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const user = await login(credentials);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    await logout();
    setUser(null);
  }, []);

  return { user, isLoading, error, login: handleLogin, logout: handleLogout };
}
