'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Imports for Firestore
import { useRouter } from 'next/navigation'; // Import useRouter
import { toast } from 'react-toastify'; // Import toast

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [memberType, setMemberType] = useState('CommunityHelper'); // Correct setter function
  const [phone, setPhone] = useState('');
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const db = getFirestore(); // Initialize Firestore
  const router = useRouter(); // Initialize router

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password,
      );

      if (userCredential && userCredential.user) {
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          memberType: memberType,
          phone: phone,
        });
      }

      console.log({ userCredential });
      sessionStorage.setItem('user', 'true');
      setEmail('');
      setPassword('');
      setName('');
      setMemberType(''); // Reset to default
      setPhone('');

      // Redirect to the home page
      router.push('/');

      // Optional: Display success toast
      toast.success('User Registered Successfully!!', {
        position: 'top-center',
      });
    } catch (e) {
      console.error('Signup failed!', e);
    }
  };

  // Member Type Options (You can customize these)
  const memberTypeOptions = ['User', 'CommunityHelper', 'CombinedUser'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 relative">
  {/* Background Image */}
  <img
    src="/icon.svg"
    alt="Background"
    className="absolute"
    style={{
      width: '100vw', // Specify a fixed width for the background image
      height: '100vh', // Specify a fixed height for the background image
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.5, // Adjust transparency
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

  {/* Sign-Up Box */}
  <div className="absolute bg-white p-10 rounded-lg shadow-2xl w-96 opacity-95 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
    <h1 className="text-indigo-700 text-3xl font-semibold mb-5">Sign Up</h1>

    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)}
      className="w-full p-3 mb-4 bg-indigo-100 rounded outline-none text-gray-800 placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-indigo-500"
    />

    <select
      value={memberType}
      onChange={e => setMemberType(e.target.value)}
      className="w-full p-3 mb-4 bg-indigo-100 rounded outline-none text-gray-800 transition duration-300 focus:ring-2 focus:ring-indigo-500"
    >
      {memberTypeOptions.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <input
      type="text"
      placeholder="Phone"
      value={phone}
      onChange={e => setPhone(e.target.value)}
      className="w-full p-3 mb-4 bg-indigo-100 rounded outline-none text-gray-800 placeholder-gray-500 transition duration-300 focus:ring-2 focus:ring-indigo-500"
    />

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
      onClick={handleSignUp}
      className="w-full p-3 bg-indigo-600 rounded text-white font-semibold hover:bg-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Sign Up
    </button>
  </div>
</div>

  );
};

export default SignUp;
