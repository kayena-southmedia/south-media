import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContact, listContacts, addNewsletterSubscriber, listNewsletterSubscribers } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // Contact form
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        phone: z.string().optional(),
        message: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await createContact({
          name: input.name,
          email: input.email,
          company: input.company ?? null,
          phone: input.phone ?? null,
          message: input.message ?? null,
          source: input.source ?? "contato",
        });
        await notifyOwner({
          title: "Novo contato recebido",
          content: `Nome: ${input.name}\nEmail: ${input.email}\nEmpresa: ${input.company || "N/A"}\nTelefone: ${input.phone || "N/A"}\nMensagem: ${input.message || "N/A"}`,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async () => {
      return listContacts();
    }),
  }),

  // Newsletter
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        await addNewsletterSubscriber({ email: input.email });
        await notifyOwner({
          title: "Novo inscrito na newsletter",
          content: `Email: ${input.email}`,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async () => {
      return listNewsletterSubscribers();
    }),
  }),

  // Ebook Brevo
  ebook: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        const apiKey = process.env.BREVO_API_KEY;
        const listId = Number(process.env.BREVO_LIST_ID);

        // Adiciona contato na lista do Brevo
        await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey!,
          },
          body: JSON.stringify({
            email: input.email,
            listIds: [listId],
            updateEnabled: true,
          }),
        });

        // Dispara automação do Brevo
        await fetch("https://api.brevo.com/v3/trackedevents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey!,
          },
          body: JSON.stringify({
            email: input.email,
            event: "ebook_download",
          }),
        });

        await notifyOwner({
          title: "Novo download de ebook",
          content: `Email: ${input.email}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;