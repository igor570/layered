import { assertEquals, assertNotStrictEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { app } from '../main.ts';
import { mockPayload, Payload } from './utils/consts.ts';

//Tests

Deno.test('POST /signup - Successful registration', async () => {
  const response = await useFetchSignUp(mockPayload);

  assertEquals(response.status, 201);

  const responseBody = await response.text();
  assertEquals(responseBody, `{"message":"User has been registered"}`);
});

Deno.test('POST /signup - Incorrect Payload', async () => {
  const response = await useFetchSignUp({ ...mockPayload, password: '' });

  assertNotStrictEquals(response.status, 201);

  const responseBody = await response.text();

  assertEquals(responseBody, '404 Not Found');
});

//Helper function

const useFetchSignUp = async (payload: Payload) => {
  return await app.request('http://localhost/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });
};
