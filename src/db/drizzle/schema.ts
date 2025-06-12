import { InferSelectModel } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('coverImageUrl').notNull(),
  published: integer('published', { mode: 'boolean'}).notNull(),
  createdAt: text('createdAt').notNull(),
  updatedAt: text('updatedAt').notNull(),
});

export type PostsTableSelectMode = InferSelectModel<typeof postsTable>;
export type PostsTableInsertMode = InferSelectModel<typeof postsTable>;