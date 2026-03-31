import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
  const { user, isAdmin } = useAuth();

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h2>Welcome, {user?.name} 👋</h2>
        <p>Role: <span className="badge">{user?.role}</span></p>
        <p>Email: {user?.email}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>📊 Overview</h3>
          <p>Your dashboard is ready. Start building!</p>
        </div>
        <div className="stat-card">
          <h3>⚡ Quick Actions</h3>
          <p>Add your app-specific actions here.</p>
        </div>
        {isAdmin && (
          <div className="stat-card admin">
            <h3>🔐 Admin Panel</h3>
            <p>You have admin access. Manage users and settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
