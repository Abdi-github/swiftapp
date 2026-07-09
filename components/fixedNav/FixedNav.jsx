import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCertification, BiMessageSquareDetail } from 'react-icons/bi';
import { IoCodeWorkingOutline } from 'react-icons/io5';
import { markHomeNavigationIntent } from '@/utils/navigationIntent';

const navItems = [
  { href: '/', label: 'Home', icon: AiOutlineHome },
  { href: '/about', label: 'About', icon: AiOutlineUser },
  { href: '/skills', label: 'Skills', icon: BiCertification },
  { href: '/portfolio', label: 'Portfolio', icon: IoCodeWorkingOutline },
  { href: '/contact', label: 'Contact', icon: BiMessageSquareDetail },
];

const FixedNav = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-backGroundOpac px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl laptop:hidden">
      {navItems.map((item) => {
        const isActive = router.pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            onClick={item.href === '/' ? markHomeNavigationIntent : undefined}
            className={`rounded-full p-3 transition-custom ${
              isActive
                ? 'bg-primary text-backGround'
                : 'text-light hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon className="h-5 w-5" />
          </Link>
        );
      })}
    </nav>
  );
};

export default FixedNav;
