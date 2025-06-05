// src/CompteApp.jsx
import { useState, useEffect } from "react";
import AuthComponent from "./AuthComponent";
import Compte from "./Compte";

export default function CompteApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('tattoo_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Erreur parsing user data:", error);
        localStorage.removeItem('tattoo_user');
      }
    }
    setLoading(false);
  }, []);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("tattoo_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("tattoo_user");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthComponent onAuthSuccess={handleAuthSuccess} />;
  }

  return <Compte user={user} onLogout={handleLogout} />;
}
