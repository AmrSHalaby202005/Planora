
import { useAuth } from "../../context/AuthContext";
import ProfileHeader from "../../components/features/Profile/ProfileHeader";
import AboutMe from "../../components/features/Profile/AboutMe";
import Projects from "../../components/features/Profile/Projects";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div
      className="max-w-6xl mx-auto p-6 min-h-screen space-y-6"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* */}
      <ProfileHeader user={user} onLogout={logout} />
      <AboutMe user={user} />
      <Projects />
    </div>
  );
}
