import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { getInitialTheme, applyTheme } from '../theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => { applyTheme(theme); }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center rounded-xl border px-3 py-2
                 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
