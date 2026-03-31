import { ReactNode } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function Layout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-brand">🦅 Curious Falcon</div>
        <div className="nav-right">
          <span className="nav-user">{user?.name}</span>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
}
