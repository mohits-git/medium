import { Hono } from 'hono'
import { sign, verify, decode } from 'hono/jwt';

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

app.use('/api/v1/blog/*', async (c, next) => {
    try {
        const header = c.req.header('authorization') || "";
        const token = header.split(' ')[1];
        if(!token) {
            c.status(403);
            return c.json({ error: "Token is required"});
        }
        const responsePayload = await verify(token, c.env.JWT_SECRET);
        if (responsePayload.id) {
            await next();
        }
        else {
            c.status(403);
            return c.json({ error: "unauthorized"});
        }
    } catch (error: any) {
        c.status(401)
        return c.json({ error: error.message });
    }
})

app.post('/api/v1/user/signup', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();

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

app.post('/api/v1/user/signin', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate());

        const body = await c.req.json();

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

app.post('/api/v1/blog', (c) => {
    return c.text('Hello World!')
})

app.put('/api/v1/blog', (c) => {
    return c.text('Hello World!')
})

app.get('/api/v1/blog/bulk', (c) => {
    return c.text('Hello World!')
})

app.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello World!')
})

export default app
