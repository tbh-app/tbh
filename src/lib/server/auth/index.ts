import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import db from "../db";
import * as schema from "../db/schema";

const adapter = new DrizzleSQLiteAdapter(db, schema.session, schema.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev,
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
			hashedPassword: attributes.hashedPassword,
			imageUrl: attributes.imageUrl,
		};
	}
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
	hashedPassword: string;
	imageUrl: string | null;
}