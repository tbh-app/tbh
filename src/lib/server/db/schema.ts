import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: text("id").primaryKey().notNull(),
    username: text("username").notNull().unique(),
    hashedPassword: text("hashed_password").notNull(),
    imageUrl: text("image_url").default('/tbh.webp'),
});

export const session = sqliteTable("session", {
	id: text("id").notNull().primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: integer("expires_at").notNull()
});

export const question = sqliteTable("question", {
    id: text("id").primaryKey(),
    forUsername: text("for_username")
        .notNull()
        .references(() => user.username),
    body: text("text").notNull(),
    createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
});