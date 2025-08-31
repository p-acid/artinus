import type { ZodType } from "zod";

const BASE_URL = "https://dummyjson.com";

export async function fetcher<T>(
  path: string,
  schema: ZodType<T>,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, init);

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.error(parsed.error);
    throw new Error("응답 객체 타입이 일치하지 않습니다.");
  }

  return parsed.data;
}
