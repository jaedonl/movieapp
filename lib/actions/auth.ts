'use server';

import { db } from "@/database/drizzle";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">) => {
    const { email, password } = params;

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            return { success: false, error: result.error};
        }

        return { success: true };
        
    } catch (error) {
        console.log(error, "Signin error");
        return { success: false, error: "signin error" };
    }

}

export const signUp = async (params: AuthCredentials) => {
    const { fullName, email, age, password, avatar } = params;


    const existingUser = await db.select().from(users).where(eq(users.email, email.toString())).limit(1);

    if (existingUser.length > 0) {
        return { success: false, error: "User already exists" };
    }

    const hashedPassword = await hash(password, 10);

    try {
        await db.insert(users).values({
            fullName,
            email,
            age,
            password: hashedPassword,
            avatar
        })

        await signInWithCredentials({ email, password });

        return { success: true };        
    } catch (error) {
        console.log(error, "Signup error")
        return { success: false, error: "Signup error"}
    }
}