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
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
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
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <select
          value={memberType}
          onChange={e => setMemberType(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
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
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
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
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
