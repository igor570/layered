/*
Helper: Generates an API response
*/
export const APIResponse = (body: string, status?: number) => {
  return new Response(body, { status });
};
