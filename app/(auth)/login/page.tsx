'use client';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem('user', 'true');
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <img
        src="/icon.svg"
        alt="Background"
        className="absolute h-full w-full  my-50"
        style={{
          opacity: 0.2, // Adjust transparency as needed
        }}
      />
      <div className="absolute top-1/2 left-20 transform  flex flex-col  text-blue-900">
        <h1 className="text-6xl font-bold a">Saftey</h1>
      </div>
      <div className="absolute top-1/2 right-20 flex flex-col  text-blue-900">
        <h1 className="text-6xl font-bold mt-4">Sphere</h1>
      </div>

      <div className="absolute bg-gray-800 p-10 rounded-lg shadow-xl w-96 opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-2xl mb-5">Sign-In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          LogIn
        </button>
        <div>
          <Link href="/sign-up" className=" text-slate-300  hover:text-white">
            Don`t have account sign-up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
