import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          Linesh Codes
        </Link>
        <nav>
          <ul className="flex space-x-6 sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.path || (link.path !== '/' && router.pathname.startsWith(link.path));
              return (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
