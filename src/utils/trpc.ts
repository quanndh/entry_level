import type { AppRouter } from "@/app/apis/trpc/trpc-router";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
