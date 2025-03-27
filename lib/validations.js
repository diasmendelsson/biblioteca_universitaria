import { z } from "zod"

export const signUpSchema = z.object( {
    fullName: z.string().min(3),
    email: z.string().min(3),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("Card da Universidade é obrigatório"),
    password: z.string().min(8),
})

export const signInSchema = z.object({
    email: z.string().min(3),
    password: z.string().min(8),
})