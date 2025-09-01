import type { ZodMiniType } from "zod/mini";

export const parseRequest = <T extends ZodMiniType>(
  schema: T,
  data: unknown,
) => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `요청 객체 타입이 일치하지 않습니다: ${parsed.error.message}`,
    );
  }
  return parsed.data;
};
