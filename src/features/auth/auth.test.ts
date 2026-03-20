import { login, logout, getCurrentUser } from './auth.service';

const mockUser = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  token: 'mock-token',
};

global.fetch = jest.fn();

const mockFetch = global.fetch as jest.Mock;

beforeEach(() => {
  mockFetch.mockReset();
});

describe('auth.service', () => {
  describe('login', () => {
    it('returns the user on successful login', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      });

      const result = await login({ email: 'test@example.com', password: 'password' });

      expect(result).toEqual(mockUser);
      expect(mockFetch).toHaveBeenCalledWith('/api/auth/login', expect.objectContaining({
        method: 'POST',
      }));
    });

    it('throws an error on failed login', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Invalid credentials' }),
      });

      await expect(login({ email: 'bad@example.com', password: 'wrong' }))
        .rejects.toThrow('Invalid credentials');
    });
  });

  describe('logout', () => {
    it('calls the logout endpoint', async () => {
      mockFetch.mockResolvedValueOnce({ ok: true });

      await logout();

      expect(mockFetch).toHaveBeenCalledWith('/api/auth/logout', { method: 'POST' });
    });
  });

  describe('getCurrentUser', () => {
    it('returns the current user when authenticated', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      });

      const result = await getCurrentUser();
      expect(result).toEqual(mockUser);
    });

    it('returns null when not authenticated', async () => {
      mockFetch.mockResolvedValueOnce({ ok: false });

      const result = await getCurrentUser();
      expect(result).toBeNull();
    });
  });
});
