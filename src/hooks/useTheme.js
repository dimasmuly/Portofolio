import { useCallback, useEffect, useState } from 'react';

const query = '(prefers-color-scheme: dark)';

function resolveTheme() {
  const saved = document.documentElement.getAttribute('data-theme');
  if (saved) return saved;
  return window.matchMedia(query).matches ? 'dark' : 'light';
}

export default function useTheme() {
  const [theme, setTheme] = useState(resolveTheme);

  // Follow OS changes until the visitor picks a theme explicitly
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => {
      if (!document.documentElement.getAttribute('data-theme')) setTheme(resolveTheme());
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = resolveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit
    }
    setTheme(next);
  }, []);

  return [theme, toggle];
}
