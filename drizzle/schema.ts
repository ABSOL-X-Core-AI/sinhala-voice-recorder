import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, longtext } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Phoneme table storing Sinhala phoneme data
 * Each row represents a phoneme or word to be recorded
 */
export const phonemes = mysqlTable("phonemes", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique phoneme identifier (e.g., PHO-0001) */
  phonemeId: varchar("phonemeId", { length: 64 }).notNull().unique(),
  /** Target phoneme character(s) in Sinhala */
  targetPhoneme: varchar("targetPhoneme", { length: 128 }).notNull(),
  /** Sinhala script to be read/recorded */
  script: longtext("script").notNull(),
  /** Category for grouping (e.g., "consonants", "vowels", "diphthongs") */
  category: varchar("category", { length: 128 }).notNull(),
  /** Sort order for display */
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Phoneme = typeof phonemes.$inferSelect;
export type InsertPhoneme = typeof phonemes.$inferInsert;

/**
 * Recording table storing audio recordings for each phoneme
 * Tracks recording status, file storage, and metadata
 */
export const recordings = mysqlTable("recordings", {
  id: int("id").autoincrement().primaryKey(),
  /** Foreign key to phonemes table */
  phonemeId: int("phonemeId").notNull(),
  /** Foreign key to users table (contributor who recorded) */
  userId: int("userId").notNull(),
  /** Status of the recording: Pending, Recorded, Approved, Passed, Deleted */
  status: mysqlEnum("status", ["Pending", "Recorded", "Approved", "Passed", "Deleted"]).default("Pending").notNull(),
  /** S3 storage key for the audio file */
  fileKey: varchar("fileKey", { length: 512 }),
  /** Duration of the recording in seconds */
  duration: decimal("duration", { precision: 10, scale: 2 }),
  /** Sample rate in Hz (e.g., 44100, 48000) */
  sampleRate: int("sampleRate"),
  /** Review notes from admin */
  reviewNotes: longtext("reviewNotes"),
  /** Admin who reviewed the recording */
  reviewedBy: int("reviewedBy"),
  /** Timestamp when recording was reviewed */
  reviewedAt: timestamp("reviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Recording = typeof recordings.$inferSelect;
export type InsertRecording = typeof recordings.$inferInsert;

/**
 * Batch submission table for tracking when contributors submit recordings for review
 */
export const batchSubmissions = mysqlTable("batchSubmissions", {
  id: int("id").autoincrement().primaryKey(),
  /** Foreign key to users table (contributor who submitted) */
  userId: int("userId").notNull(),
  /** Number of recordings in this batch */
  recordingCount: int("recordingCount").notNull(),
  /** Status of the batch: pending, in_review, completed */
  status: mysqlEnum("status", ["pending", "in_review", "completed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BatchSubmission = typeof batchSubmissions.$inferSelect;
export type InsertBatchSubmission = typeof batchSubmissions.$inferInsert;
