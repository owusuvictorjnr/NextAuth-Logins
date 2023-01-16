import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="container">
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  );
};

// Guest User

const Guest = () => {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold capitalize">guest homepage </h3>
      <div className="flex justify-center">
        <Link
          href={'/login'}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-100 capitalize"
        >
          sign in
        </Link>
      </div>
    </main>
  );
};

// Authorize Use
const User = ({ session }) => {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold capitalize">authorize use homepage </h3>

      <div className="details capitalize">
        <h5 className="">{session.user.name}</h5>
        <h5 className="">{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50 capitalize">
          sign out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={'/profile'}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-100 capitalize"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
};

export default Home;
