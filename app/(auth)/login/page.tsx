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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 relative">
  {/* Background Image */}
  <img
    src="/icon.svg"
    alt="Background"
    className="absolute"
    style={{
      width: '100vh', // Specify a fixed width
      height: '100vh', // Specify a fixed height
      top: '50%', // Align image vertically in the center
      left: '50%', // Align image horizontally in the center
      transform: 'translate(-50%, -50%)', // Center image correctly
      opacity: 0.5, // Adjust transparency as needed
    }}
  />

  {/* "Safety" text on the left */}
  <div className="absolute top-1/3 left-20 transform text-blue-900 animate-slide-left">
    <h1 className="text-7xl font-bold tracking-wider">Safety</h1>
  </div>

  {/* "Sphere" text on the right */}
  <div className="absolute top-1/3 right-20 transform text-blue-900 animate-slide-right">
    <h1 className="text-7xl font-bold tracking-wider">Sphere</h1>
  </div>

  {/* Sign-In Box */}
  <div className="absolute bg-white p-10 rounded-lg shadow-2xl w-96 opacity-95 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
    <h1 className="text-indigo-700 text-3xl font-semibold mb-5">Sign-In</h1>
    
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      className="w-full p-3 mb-4 bg-indigo-100 rounded outline-none text-gray-800 placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-indigo-500"
    />
    
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      className="w-full p-3 mb-4 bg-indigo-100 rounded outline-none text-gray-800 placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-indigo-500"
    />
    
    <button
      onClick={handleSignIn}
      className="w-full p-3 bg-indigo-600 rounded text-white font-semibold hover:bg-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Log In
    </button>

    <div className="mt-4">
      <Link href="/sign-up" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300">
        Don’t have an account? Sign up here
      </Link>
    </div>
  </div>
</div>

  );
};

export default Login;
