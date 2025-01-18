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