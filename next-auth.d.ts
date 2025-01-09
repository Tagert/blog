import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }
}

declare module "next-auth" {
  interface Profile {
    id: string;
    login: string;
    bio?: string;
  }
}
