import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import styles from '../styles/Form.module.css';
import Layout from '../components/Layout';

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4 capitalize">
            register
          </h1>

          <p className="w-3/4 mx-auto text-gray-400">
            loremIrure id fugiat ipsum nostrud nulla ullamco id anim dolore
            veniam enim.
          </p>
        </div>

        {/*Form*/}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>

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
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
            />

            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/*Login buttons*/}
          <div className="input-button ">
            <button type="submit" className={styles.button}>
              sign up
            </button>
          </div>
        </form>
        {/*buttom*/}

        <p className="text-center text-gray-400 ">
          have an accout?
          <Link href={'/login'} className="capitalize  text-blue-700 px-2">
            Sign in
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Register;
