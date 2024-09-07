// 'use client'
// import {React, useEffect } from "react";
// import { useAuthContext } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// export default function Page() {
//     const { user } = useAuthContext()
//     const router = useRouter()

//     useEffect(() => {
//         if (user == null) router.push("/")
//     }, [user])

//     return (<div>
//         <div>
//             <h1>Only logged in users can view this page</h1>
//             {user.email}
//         </div>
//         </div>);
// }


'use client'
import { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext'; // Assuming your AuthContext is correctly set up
import { useRouter } from 'next/navigation';

interface User{
  email?: string;
}

export default function Page() {
  const { user } = useAuthContext() as { user: User | null }; // Assuming your AuthContext is correctly set up
  const router = useRouter();

  useEffect(() => {
    // Check if user is null or undefined
    if (!user) { 
      router.push('/'); // Redirect to homepage
    }
  }, [user]); // Dependency array ensures useEffect runs on changes to user

  // Safely access user.email if user exists
  if (user) {
    return (
      <div>
        <div>
          <h1>Only logged in users can view this page</h1>
          {user.email}
        </div>
      </div>
    );
  } else {
    // If user is not logged in, you can show a placeholder or loading state.
    return <div>Loading...</div>; 
  }
}