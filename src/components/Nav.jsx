import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import useTheme from '../hooks/useTheme.js';
import { profile } from '../data/profile.js';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Home">
          <Logo className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">{profile.shortName}</span>
            <span className="brand-role">{profile.role}</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button
          className="icon-btn"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
        </button>
      </div>
    </header>
  );
}
