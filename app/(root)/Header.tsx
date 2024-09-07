'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useAuthContext } from '@/context/AuthContext';
import { signOut, User } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
// import Profile from "@/components/Profile";

interface NavigationLink {
  label: string;
  route: string;
}

const Header = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // Redirect after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const { user } = useAuthContext() as { user: User | null };
  const pathname = usePathname();
  const router = useRouter();

  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [isAdditionalMenuOpen, setIsAdditionalMenuOpen] = useState(false);

  // Toggle handlers
  // const handleToggle = () => setIsOpen(!isOpen);
  const handleAdditionalMenuToggle = () =>
    setIsAdditionalMenuOpen(!isAdditionalMenuOpen);

  // Select item and close menu
  const handleSelectItem = (itemName: string, route: string) => {
    router.push(route);
    setIsOpen(false);
    setIsAdditionalMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen || isAdditionalMenuOpen) {
        const dropdown = document.querySelector('.dropdown-menu');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setIsOpen(false);
          setIsAdditionalMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isAdditionalMenuOpen]);

  // Navigation links
  const navigationLinks: NavigationLink[] = [
    { label: 'Home', route: '/' },
    { label: 'Features', route: '/fetures' },
    { label: 'About Us', route: '/about' },
    { label: 'Download-App', route: '/mobile-app' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <nav className="topbar">
      <div className="w-full border-b">
        <div className="wrapper flex items-center justify-between ">
          {/* Hamburger  */}
          <div className="mt-1 md:hidden">
            <Menu onClick={handleAdditionalMenuToggle} />
            {isAdditionalMenuOpen && (
              <div className="absolute left-0 mt-4 w-40 bg-slate-100 rounded-lg shadow-lg z-10 dropdown-menu">
                {navigationLinks.map(link => (
                  <div
                    key={link.label}
                    className="block px-4 py-2 rounded-lg items-center hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleSelectItem(link.label, link.route)}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Logo */}
          <div className="hover:drop-shadow-xl">
            <Link href="/" className="flex items-center gap-4">
              <div className="rounded-full shadow-lg hover:drop-shadow-xl">
                <Image
                  src="/icon.svg"
                  alt="image of icon"
                  className="m-3"
                  width={50} // Base width
                  height={50} // Base height
                  sizes="(max-width: 768px) 100vw, 200px" // Responsive sizing
                />
              </div>
              <p className="hidden lg:flex text-xl font-bold text-blue-900">
                SafetySphere
              </p>
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex gap-2  mx-1 ">
            {navigationLinks.map(link => (
              <Link
                href={link.route}
                key={link.label}
                className={`rounded-lg p-2 ${
                  pathname === link.route
                    ? 'text-blue-800 bg-blue-100'
                    : 'hover:bg-blue-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* SignOut buttons */}
          <div className="hidden md:flex gap-2">
            {user ? (
              <button
                onClick={logout}
                className="border p-2 mr-4 rounded-lg bg-slate-200 hover:bg-blue-100 hover:text-blue-800"
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/login"
                className="border p-1 rounded-lg hover:bg-slate-100"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
