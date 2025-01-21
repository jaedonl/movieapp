import { z } from 'zod'

export const signUpSchema = z.object({
    fullName: z.string().min(3, "Name must be at least 3 characters long."),
    email: z.string().email("Invalid email address."),
    age: z.coerce.number().min(15, "You must be at least 15 years old."),
    avatar: z.string(),
    password: z.string().min(8, "Password must be at least 6 characters long."),
    confirmPassword: z.string().min(8, "Confirm password must match the password"),  
})

export const signInSchema = z.object({
    email: z.string().email("Invalid email address."),
    password: z.string().min(8, "Password must be at least 6 characters long."),  
})

export const contentSchema = z.object({
    title: z.string().trim().min(2).max(100),
    description: z.string().trim().min(10).max(1000),
    author: z.string().trim().min(2).max(100),
    genre: z.string().trim().min(2).max(50),
    rating: z.coerce.number().min(1).max(5),
    coverUrl: z.string().nonempty(),
    videoUrl: z.string().nonempty(),
    summary: z.string().trim().min(10),
})