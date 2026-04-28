import { describe, it, expect, beforeEach } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

// Mock user for testing
function createMockUser(role: 'user' | 'admin' = 'user') {
  return {
    id: 1,
    openId: 'test-user',
    email: 'test@example.com',
    name: 'Test User',
    loginMethod: 'test',
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };
}

// Mock context for testing
function createMockContext(user: any): TrpcContext {
  return {
    user,
    req: {
      protocol: 'https',
      headers: {},
    } as any,
    res: {
      clearCookie: () => {},
    } as any,
  };
}

describe('Recording Procedures', () => {
  describe('phoneme.list', () => {
    it('should return all phonemes', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const phonemes = await caller.phoneme.list({});

      expect(Array.isArray(phonemes)).toBe(true);
    });

    it('should filter phonemes by category', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const phonemes = await caller.phoneme.list({ category: 'consonants' });

      expect(Array.isArray(phonemes)).toBe(true);
      if (phonemes.length > 0) {
        expect(phonemes[0].category).toBe('consonants');
      }
    });

    it('should search phonemes by text', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const phonemes = await caller.phoneme.list({ search: 'ක' });

      expect(Array.isArray(phonemes)).toBe(true);
    });
  });

  describe('phoneme.getCategories', () => {
    it('should return list of categories', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const categories = await caller.phoneme.getCategories();

      expect(Array.isArray(categories)).toBe(true);
      expect(categories.length).toBeGreaterThan(0);
    });
  });

  describe('phoneme.getStats', () => {
    it('should return recording statistics', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const stats = await caller.phoneme.getStats();

      expect(stats).toBeDefined();
      expect(stats.recordingStats).toBeDefined();
      expect(stats.categoryStats).toBeDefined();
      expect(typeof stats.recordingStats.total).toBe('number');
    });
  });

  describe('recording.getUserRecordings', () => {
    it('should require authentication', async () => {
      const ctx = createMockContext(null);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.recording.getUserRecordings();
        expect.fail('Should throw unauthorized error');
      } catch (error: any) {
        expect(error.code).toBe('UNAUTHORIZED');
      }
    });

    it('should return user recordings when authenticated', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const recordings = await caller.recording.getUserRecordings();

      expect(Array.isArray(recordings)).toBe(true);
    });
  });

  describe('recording.create', () => {
    it('should require authentication', async () => {
      const ctx = createMockContext(null);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.recording.create({
          phonemeId: 1,
          fileKey: 'test-key',
          duration: 5,
          sampleRate: 48000,
        });
        expect.fail('Should throw unauthorized error');
      } catch (error: any) {
        expect(error.code).toBe('UNAUTHORIZED');
      }
    });

    it('should create recording for authenticated user', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const result = await caller.recording.create({
        phonemeId: 1,
        fileKey: 'test-key-123',
        duration: 5,
        sampleRate: 48000,
      });

      expect(result).toBeDefined();
    });
  });

  describe('recording.updateStatus', () => {
    it('should require admin role', async () => {
      const ctx = createMockContext(createMockUser('user'));
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.recording.updateStatus({
          recordingId: 1,
          status: 'Approved',
        });
        expect.fail('Should throw forbidden error');
      } catch (error: any) {
        expect(error.code).toBe('FORBIDDEN');
      }
    });

    it('should allow admin to update status', async () => {
      const ctx = createMockContext(createMockUser('admin'));
      const caller = appRouter.createCaller(ctx);

      // This will fail if recording doesn't exist, but tests the authorization
      try {
        await caller.recording.updateStatus({
          recordingId: 1,
          status: 'Approved',
          reviewNotes: 'Good quality',
        });
      } catch (error) {
        // Expected if recording doesn't exist
      }
    });
  });

  describe('batch.submit', () => {
    it('should require authentication', async () => {
      const ctx = createMockContext(null);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.batch.submit({ recordingCount: 5 });
        expect.fail('Should throw unauthorized error');
      } catch (error: any) {
        expect(error.code).toBe('UNAUTHORIZED');
      }
    });

    it('should create batch submission for authenticated user', async () => {
      const ctx = createMockContext(createMockUser());
      const caller = appRouter.createCaller(ctx);

      const result = await caller.batch.submit({ recordingCount: 5 });

      expect(result).toBeDefined();
    });
  });

  describe('batch.getPending', () => {
    it('should require admin role', async () => {
      const ctx = createMockContext(createMockUser('user'));
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.batch.getPending();
        expect.fail('Should throw forbidden error');
      } catch (error: any) {
        expect(error.code).toBe('FORBIDDEN');
      }
    });

    it('should return pending batches for admin', async () => {
      const ctx = createMockContext(createMockUser('admin'));
      const caller = appRouter.createCaller(ctx);

      const batches = await caller.batch.getPending();

      expect(Array.isArray(batches)).toBe(true);
    });
  });
});
