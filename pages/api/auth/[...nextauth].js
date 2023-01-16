import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';

export default NextAuth({
  // Config one or more authentication providers

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,

      clientSecret: process.env.GITHUB_SECRET,
    }),

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // Add more providers here
  ],

  // Database

  database: process.env.DATABASE_URL,
});
