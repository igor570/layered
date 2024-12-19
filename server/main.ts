import { db } from './db/db.ts';
import { Hono } from '@hono/hono';
import { cors } from '@hono/hono/cors';
// import { setCookie } from '@hono/hono/cookie';
import { APIResponse } from './utils/utils.ts';

export const app = new Hono();

app.use('*', cors());

app.post('/signup', async (ctx) => {
  const { email, password } = await ctx.req.json();

  if (email && password) {
    const { error } = await db.auth.signUp({ email, password });

    if (error) APIResponse('Sign up failed: ', error.status);

    return ctx.json({ message: 'User has been registered' }, 201);
  }
});

app.post('/login', async (ctx) => {
  const { email, password } = await ctx.req.json();

  if (email && password) {
    const { data, error } = await db.auth.signInWithPassword({
      email,
      password
    });

    //TODO: Revisit this

    // if (data.session?.access_token) {
    //   setCookie(ctx, data.session.access_token, 'session_token', {
    //     httpOnly: true,
    //     sameSite: 'strict',
    //     maxAge: 1000 * 60 * 60 * 24
    //   });
    // }

    if (error) APIResponse(error.message, 400);

    const sessionData = {
      sessionToken: data.session?.access_token,
      refreshToken: data.session?.refresh_token
    };

    return ctx.json({
      message: 'Sign in successful',
      user: data.user,
      session: sessionData
    });
  }

  return ctx.json({ error: 'Email and password are required' }, 400);
});

//Launch server
Deno.serve(app.fetch);
