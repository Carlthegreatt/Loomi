import { z } from "zod";

const clientSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url().optional(),
});

const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

function loadEnv<T extends z.ZodTypeAny>(schema: T, source: Record<string, string | undefined>) {
  const parsed = schema.safeParse(source);
  if (!parsed.success) {
    const errors = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
    throw new Error(`Invalid environment variables: ${errors}`);
  }
  return parsed.data as z.infer<T>;
}

export const clientEnv = loadEnv(clientSchema, process.env as Record<string, string | undefined>);
export const serverEnv = loadEnv(serverSchema, process.env as Record<string, string | undefined>);
