import { integer, text, boolean, pgTable, uuid, varchar, pgEnum, date, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED'])
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN'])
export const MEMBER_STATUS = pgEnum('member_status', ['REGULAR', "MEMBER"])

export const users = pgTable("users", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name", {length: 255}).notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    age: integer("age").notNull(),
    avatar: text("avatar"),
    status: STATUS_ENUM('status').default('PENDING'),
    role: ROLE_ENUM('role').default('USER'),
    lastActivityDate: date('last_activity_date').defaultNow(),
    createdAt: timestamp('created_at', {
        withTimezone: true
    }).defaultNow(),
});
