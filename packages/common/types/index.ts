import {z} from "zod";

export const CreateUserSchema = z.object({
    userName: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.email("Invalid email address"),
})

export const LoginUserSchema = z.object({
    userName: z.string().nonempty("Username is required"),
    password: z.string().nonempty('Password is required')
})

