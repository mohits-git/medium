import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { SignInInput, SignUpInput } from "@mohits-npm/medium-zod-validation";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        prisma: any
    }
}>();


userRouter.use('*', async (c, next) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        c.set("prisma", prisma);
        await next();
    } catch (error: any) {
        c.status(403);
        return c.json({ error: "Error while creating prisma client" });
    }
})

userRouter.post('/signup', async (c) => {
    try {
        const prisma = c.get('prisma');

        const body = await c.req.json();

        const { success } = SignUpInput.safeParse(body);

        if (!success) {
            c.status(401);
            return c.json({ error: "Invalid credentials" });
        }

        const userExist = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });

        if (userExist) {
            c.status(401);
            return c.json({
                error: "User with same email already exist."
            });
        }

        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password,
            }
        });

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            message: "Successfully Signed Up",
            token
        });

    } catch (error: any) {
        c.status(403);
        return c.json({ error: "Error while signing up" });
    }
})

userRouter.post('/signin', async (c) => {
    try {
        const prisma = c.get('prisma');

        const body = await c.req.json();

        const { success } = SignInInput.safeParse(body);

        if (!success) {
            c.status(401);
            return c.json({ error: "Invalid credentials" });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });

        if (!user) {
            c.status(400);
            return c.json({ error: "User not found" });
        }

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);

        return c.json({
            message: "Successfully Signed In",
            token
        });
    } catch (error: any) {
        c.status(400);
        return c.json({ error: "Error while signing in" });
    }
})

export default userRouter;
