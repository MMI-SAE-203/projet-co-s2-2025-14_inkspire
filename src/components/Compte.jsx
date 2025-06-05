// src/Compte.jsx
import { useEffect, useState } from "react";

export default function Compte({ user, onLogout }) {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/tattoos/user/${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const favoris = data.tattoos.filter(t => t.favoris);
          const autres = data.tattoos.filter(t => !t.favoris);
          setTattoos([...favoris, ...autres]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user.id]);

  return (
    <div className=" bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Mon profil</h1>
          <button onClick={onLogout} className="text-gray-400 hover:text-white">Déconnexion</button>
        </div>

        <div className="flex gap-8 border-b border-gray-800 mb-10">
          <button className="text-white font-medium border-b-2 border-white pb-2">Mes tatouages</button>
          <button className="text-gray-500 hover:text-white pb-2">Favoris</button>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center">Chargement...</p>
        ) : tattoos.length === 0 ? (
          <p className="text-gray-500 text-center">Aucun tatouage généré.</p>
        ) : (
          <div className="space-y-10">
            {tattoos.map((t) => (
              <div key={t.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                <div className="mb-3">
                  <p className="text-sm text-gray-300 italic">"{t.prompt}"</p>
                </div>
                <img 
                  src={t.image} 
                  alt="Tatouage généré" 
                  className="w-full max-h-96 object-contain bg-white rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-gray-600 text-sm mt-10 italic">À suivre…</p>
      </div>
    </div>
  );
}
