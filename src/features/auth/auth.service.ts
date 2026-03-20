export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  token: string;
}

export async function login(credentials: LoginCredentials): Promise<AuthUser> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? 'Login failed');
  }

  return response.json();
}

export async function logout(): Promise<void> {
  await fetch('/api/auth/logout', { method: 'POST' });
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const response = await fetch('/api/auth/me');
  if (!response.ok) return null;
  return response.json();
}
