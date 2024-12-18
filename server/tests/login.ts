import {
  assertEquals,
  assertNotStrictEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { app } from "../main.ts";
import { mockPayload, Payload } from "./utils/consts.ts";

//Tests

Deno.test("POST /login - Successful registration", async () => {
  const response = await useFetchLogin(mockPayload);

  assertEquals(response.status, 200);

  const responseBody = await response.text();
  assertEquals(responseBody, `{"message":"Sign in successful","user":{}}`);
});

Deno.test("POST /login - Incorrect Payload", async () => {
  const response = await useFetchLogin({ ...mockPayload, password: "" });

  assertNotStrictEquals(response.status, 20);

  const responseBody = await response.text();

  assertEquals(responseBody, `{"error":"Email and password are required"}`);
});

//Helper function

const useFetchLogin = async (payload: Payload) => {
  return await app.request("http://localhost/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });
};
