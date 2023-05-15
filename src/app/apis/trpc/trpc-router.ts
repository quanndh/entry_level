import { SessionResolver } from "@/app/apis/resolvers/session";
import { ShortTitleEnum, StatusEnum } from "@/app/apis/types";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  getSessions: t.procedure
    .input(
      z.object({
        status: z.nativeEnum(StatusEnum).nullish(),
        short_title: z.nativeEnum(ShortTitleEnum).nullish(),
      })
    )
    .query(({ input }) => {
      const { status, short_title } = input;
      return SessionResolver.getSessions(status, short_title);
    }),
});

export type AppRouter = typeof appRouter;
