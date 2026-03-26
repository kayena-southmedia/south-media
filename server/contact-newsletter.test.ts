import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  createContact: vi.fn().mockResolvedValue(undefined),
  listContacts: vi.fn().mockResolvedValue([
    { id: 1, name: "Test User", email: "test@example.com", company: "Test Co", phone: "123", message: "Hello", source: "contato", createdAt: new Date() },
  ]),
  addNewsletterSubscriber: vi.fn().mockResolvedValue(undefined),
  listNewsletterSubscribers: vi.fn().mockResolvedValue([
    { id: 1, email: "subscriber@example.com", createdAt: new Date() },
  ]),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "owner-id",
      email: "owner@example.com",
      name: "Owner",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts a valid contact submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "João Silva",
      email: "joao@empresa.com",
      company: "Empresa X",
      phone: "+5541999999999",
      message: "Quero um diagnóstico",
      source: "contato",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts minimal contact submission (name + email only)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Maria",
      email: "maria@test.com",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test",
        email: "not-an-email",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@test.com",
      })
    ).rejects.toThrow();
  });
});

describe("newsletter.subscribe", () => {
  it("accepts a valid email subscription", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: "subscriber@example.com",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects subscription with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.newsletter.subscribe({
        email: "invalid",
      })
    ).rejects.toThrow();
  });
});

describe("contact.list (protected)", () => {
  it("returns contacts for authenticated admin user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.list();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].email).toBe("test@example.com");
  });

  it("rejects unauthenticated access to contact list", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.contact.list()).rejects.toThrow();
  });
});

describe("newsletter.list (protected)", () => {
  it("returns subscribers for authenticated admin user", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.list();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].email).toBe("subscriber@example.com");
  });

  it("rejects unauthenticated access to newsletter list", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.newsletter.list()).rejects.toThrow();
  });
});
