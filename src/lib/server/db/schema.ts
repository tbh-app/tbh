import { sql } from "drizzle-orm";
import { pgTable, text, integer, date, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: text("id").primaryKey().default(crypto.randomUUID()),
    username: text("username").notNull().unique(),
    hashedPassword: text("hashed_password").notNull(),
    imageUrl: text("image_url").default('/tbh.webp'),
});

export const session = pgTable("session", {
    id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const question = pgTable("question", {
    id: text("id").primaryKey(),
    forUsername: text("for_username")
        .notNull()
        .references(() => user.username),
    body: text("text").notNull(),
    createdAt: date('created-at')
});