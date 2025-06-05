import { useState } from "react";

export default function AuthComponent({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Connexion
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });

        const data = await res.json();
        if (data.success) {
          onAuthSuccess(data.user);
        } else {
          alert('Erreur de connexion: ' + data.error);
        }
      } else {
        // Inscription
        if (formData.password !== formData.confirmPassword) {
          alert('Les mots de passe ne correspondent pas');
          return;
        }

        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            username: formData.username
          })
        });

        const data = await res.json();
        if (data.success) {
          onAuthSuccess(data.user);
        } else {
          alert('Erreur d\'inscription: ' + data.error);
        }
      }
    } catch (error) {
      alert('Erreur: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-xs">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-normal text-white mb-3">
            Connectez-vous
          </h1>
          <p className="text-gray-400 text-xs leading-relaxed">
            Vous souhaitez commencer vos tatouages ?<br />
            Connectez-vous !
          </p>
        </div>

        {/* Formulaire */}
        <div className="space-y-3">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="username"
                placeholder="Nom d'utilisateur"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border-0 focus:ring-1 focus:ring-gray-500 focus:outline-none transition-all placeholder-gray-400 text-sm"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail (obligatoire)"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border-0 focus:ring-1 focus:ring-gray-500 focus:outline-none transition-all placeholder-gray-400 text-sm"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border-0 focus:ring-1 focus:ring-gray-500 focus:outline-none transition-all placeholder-gray-400 text-sm"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {!isLogin && (
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border-0 focus:ring-1 focus:ring-gray-500 focus:outline-none transition-all placeholder-gray-400 text-sm"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="text-right mb-4">
            <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-normal py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
          >
            {loading 
              ? (isLogin ? 'Connexion...' : 'Inscription...') 
              : (isLogin ? 'Connexion' : 'Créer un compte')
            }
          </button>
        </div>

        {/* Toggle entre connexion/inscription */}
        <div className="text-center mt-6">
          <span className="text-gray-400 text-xs">
            {isLogin ? "Pas encore de compte ? " : "Déjà un compte ? "}
          </span>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-300 hover:text-white transition-colors text-xs underline underline-offset-2"
          >
            {isLogin 
              ? "Inscrivez-vous" 
              : "Connectez-vous"
            }
          </button>
        </div>
      </div>
    </div>
  );
}