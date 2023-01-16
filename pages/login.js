import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Form.module.css';
import { HiFingerPrint, HiAtSymbol } from 'react-icons/hi';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  const [show, setShow] = useState(false);

  async function handleGoogleSignin() {
    signIn('google', { callbackURL: 'http://localhost:3000' });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>

          <p className="w-3/4 mx-auto text-gray-400">
            loremIrure id fugiat ipsum nostrud nulla ullamco id anim dolore
            veniam enim.
          </p>
        </div>

        {/*Form*/}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/*Login buttons*/}
          <div className="input-button ">
            <button type="submit" className={styles.button}>
              login
            </button>
          </div>

          <div className="input-button ">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.custome_button}
            >
              sign in with google{' '}
              <Image
                src={'/loginImgs/google.svg'}
                alt="google"
                width={'20'}
                height="20"
                className=""
              />
            </button>
          </div>

          <div className="input-button ">
            <button type="button" className={styles.custome_button}>
              sign in with github{' '}
              <Image
                src={'/loginImgs/github.svg'}
                alt="github"
                width={'25'}
                height="25"
                className=""
              />
            </button>
          </div>
        </form>
        {/*buttom*/}

        <p className="text-center text-gray-400 ">
          don`t have an accout?
          <Link href={'/register'} className="capitalize  text-blue-700 px-2">
            Sign up
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
