import { betterAuth } from "better-auth";

// Initialize Better Auth with minimal configuration to avoid 500 errors
export const auth = betterAuth({
  secret: process.env.NEXT_PUBLIC_BETTER_AUTH_SECRET || process.env.BETTER_AUTH_SECRET || "Xp2Pai0rYqduM32JBoNYaqWYVQjZEIWk",
  // Minimal configuration to avoid database issues
  database: {
    provider: "sqlite",
    url: "sqlite::memory:",
  },
  // Basic JWT configuration
  jwt: {
    expiresIn: '7d',
  },
});