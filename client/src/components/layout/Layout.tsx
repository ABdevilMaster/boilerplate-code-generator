import { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { themeConfig } from '../../styles/theme.config';

export default function Layout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();
  const { company } = themeConfig;

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">
          {company.logo && <span className="nav-logo">{company.logo}</span>}
          {company.name}
        </div>
        <div className="nav-right">
          <span className="nav-user">{user?.name}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
}
