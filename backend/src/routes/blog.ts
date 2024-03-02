import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        user_id: string
    }
}>();


blogRouter.use('*', async (c, next) => {
    try {
        const header = c.req.header("authorization") || "";
        const token = header.split(' ')[1];
        if (!token) {
            c.status(403);
            return c.json({ error: "Token is required" });
        }
        const responsePayload = await verify(token, c.env.JWT_SECRET);
        if (responsePayload.id) {
            c.set("user_id", responsePayload.id);
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

blogRouter.post('/', async (c) => {
    try {
        const body = await c.req.json();
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                author_id: c.get("user_id")
            }
        });

        return c.json({
            blogId: blog.id
        });
    } catch (error: any) {
        c.status(401)
        return c.json({ error: error.message });
    }
})

blogRouter.put('/', async (c) => {
    try {
        const body = await c.req.json();
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.post.update({
            where: {
                id: body.id,
                author_id: c.get('user_id')
            },
            data: {
                title: body.title,
                content: body.content,
            }
        });
    
        if (!blog) {
            c.status(404)
            return c.json({ error: "Error: Blog not found" });
        }

        return c.json({
            blogId: blog.id
        });
    } catch (error: any) {
        c.status(401)
        return c.json({ error: error.message });
    }
})

blogRouter.get('/bulk', async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.post.findMany();

        if (!blog) {
            c.status(404)
            return c.json({ error: "No blogs found" });
        }

        return c.json({
            blog
        });
    } catch (error: any) {
        c.status(500)
        return c.json({ error: error.message });
    }
})

blogRouter.get('/:id', async (c) => {
    try {
        const blogId = c.req.param('id');
        const prisma = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.post.findUnique({
            where: {
                id: blogId,
                author_id: c.get('user_id')
            }
        });

        if (!blog) {
            c.status(404)
            return c.json({ error: "Error: Blog not found" });
        }

        return c.json({
            blog
        });
    } catch (error: any) {
        c.status(500)
        return c.json({ error: error.message });
    }
})

export default blogRouter;
