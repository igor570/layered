import { db } from "./db/db.ts";
import { Hono } from "@hono/hono";
import { APIResponse } from "./utils/utils.ts";

const app = new Hono();

app.post("/signup", async (ctx) => {
  const { email, password } = await ctx.req.json();

  if (email && password) {
    const { error } = await db.auth.signUp({ email, password });

    if (error) APIResponse("Sign up failed: ", error.status);

    return APIResponse("User registered", 201);
  }
});

app.post("/login", async (ctx) => {
  const { email, password } = await ctx.req.json();

  if (email && password) {
    const { data, error } = await db.auth.signInWithPassword({
      email,
      password,
    });

    if (error) APIResponse(error.message, 400);

    return ctx.json({
      message: "Sign in successful",
      user: {
        sessionToken: data.session?.access_token,
      },
    });
  }

  return ctx.json({ error: "Email and password are required" }, 400);
});

//Launch server
Deno.serve(app.fetch);
