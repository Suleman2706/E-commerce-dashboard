import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem('theme'); // 'dark' or 'light' or null
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      } else if (stored === 'light') {
        document.documentElement.classList.remove('dark');
        setDarkMode(false);
      } else {
        // no preference stored — use OS preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
        setDarkMode(prefersDark);
      }
    } catch (e) {
      // localStorage might be disabled — ignore
      console.warn('Theme init error', e);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      setDarkMode(isDark);
    } catch (e) {
      console.warn('Toggle theme error', e);
    }
  };

  if (!mounted) return null; // prevents SSR hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={darkMode}
      className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
      title={darkMode ? 'Switch to light' : 'Switch to dark'}
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
}
