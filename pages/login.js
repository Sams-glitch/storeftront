import Link from 'next/link';
import React, { useEffect } from 'react';
import Container from '../modules/layout/Container';
import Layout from '../modules/layout/Layout';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout>
      <Container>
        <div className="w-full mt-5 px-6">
          <div className="max-w-sm md:max-w-md mx-auto">
            <h3 className="text-xl mb-4 px-0">Login</h3>
            <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 text-sm text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                  className="w-full py-3 px-4 placeholder:text-gray-600 border outline-none"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: {
                      value: 6,
                      message: 'password is more than 5 chars',
                    },
                  })}
                  className="w-full py-3 px-4 placeholder:text-gray-600 border outline-none"
                  aut
                />
                {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )}
              </div>
              <div className="mb-4">
                <button className="w-full py-2 px-3 bg-emerald-700 text-white">
                  Login
                </button>
              </div>
              <div className="mb-4">
                <p>
                  Don&apos;t have an account? &nbsp; {''}{' '}
                  <Link href={'/register'} className="text-blue-700">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
