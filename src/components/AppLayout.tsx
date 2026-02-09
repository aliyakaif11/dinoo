import { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MiniPlayer from './MiniPlayer';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/library', label: 'Library' },
];

const AppLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Dino Ventures</p>
            <h1 className="text-lg font-semibold">Video Player Assignment</h1>
          </div>
          <nav className="hidden gap-4 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-brand-500 text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main
        key={location.pathname}
        className="mx-auto w-full max-w-6xl px-4 py-6 animate-fade-in"
      >
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-slate-800 bg-slate-950/95 px-4 py-3 backdrop-blur md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `text-xs font-medium uppercase tracking-wide ${
                isActive ? 'text-brand-100' : 'text-slate-400'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <MiniPlayer />
    </div>
  );
};

export default AppLayout;
