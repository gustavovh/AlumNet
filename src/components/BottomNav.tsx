import { Home, Bell, Calendar, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

const navItems = [
  { icon: Home, label: 'Inicio', path: '/' },
  { icon: Bell, label: 'Alertas', path: '/alerts' },
  { icon: Calendar, label: 'Agenda', path: '/agenda' },
  { icon: User, label: 'Perfil', path: '/profile' },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-100 px-6 py-2 pb-6 flex justify-between items-center z-50">
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1 transition-colors duration-200",
              isActive ? "text-primary" : "text-gray-400"
            )
          }
        >
          {({ isActive }) => (
            <>
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive && "bg-blue-50"
              )}>
                <Icon size={24} className={isActive ? "fill-primary/20" : ""} />
              </div>
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
