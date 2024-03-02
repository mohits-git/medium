import { z } from "zod";

export const SignUpInput = z.object ({
    name: z.string(),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be 6 characters long")
});

export const SignInInput = z.object ({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be 6 characters long")
});

export const PostBlogInput = z.object ({
    title: z.string().min(3),
    content: z.string().min(3),
});

export const UpdateBlogInput = z.object ({
    title: z.string().min(3),
    content: z.string().min(3),
    id: z.string(),
});

export type SignUpSchema = z.infer<typeof SignUpInput>;
export type SignInSchema = z.infer<typeof SignInInput>;
export type PostBlogSchema = z.infer<typeof PostBlogInput>;
export type UpdateBlogSchema = z.infer<typeof UpdateBlogInput>;
