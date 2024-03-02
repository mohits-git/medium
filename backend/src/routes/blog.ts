import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


blogRouter.use('*', async (c, next) => {
    try {
        const header = c.req.header('authorization') || "";
        const token = header.split(' ')[1];
        if (!token) {
            c.status(403);
            return c.json({ error: "Token is required" });
        }
        const responsePayload = await verify(token, c.env.JWT_SECRET);
        if (responsePayload.id) {
            await next();
        }
        else {
            c.status(403);
            return c.json({ error: "unauthorized" });
        }
    } catch (error: any) {
        c.status(401)
        return c.json({ error: error.message });
    }
})

blogRouter.post('/', (c) => {
    return c.text('Hello World!')
})

blogRouter.put('/', (c) => {
    return c.text('Hello World!')
})

blogRouter.get('/bulk', (c) => {
    return c.text('Hello World!')
})

blogRouter.get('/:id', (c) => {
    return c.text('Hello World!')
})

export default blogRouter;
