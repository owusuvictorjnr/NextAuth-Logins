import NextAuth from 'next-auth';

import Provuders from 'next-auth/providers';

export default NextAuth({
  // Config one or more authentication providers

  providers: [
    Provuders.GitHub({
      clientId: process.env.GITHUB_ID,

      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Add more providers here
  ],

  // Database

  database: process.env.DATABASE_URL,
});
