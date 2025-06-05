// src/Compte.jsx
import { useEffect, useState } from "react";

export default function Compte({ user, onLogout }) {
  const [tattoos, setTattoos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all'); // 'all' ou 'favoris'

  useEffect(() => {
    fetch(`/api/tattoos/user/${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setTattoos(data.tattoos);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user.id]);

  // Fonction pour basculer le statut favori
  const toggleFavoris = async (tattooId, currentStatus) => {
    try {
      const response = await fetch(`/api/tattoos/${tattooId}/favoris`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          favoris: !currentStatus 
        })
      });

      if (response.ok) {
        // Mettre à jour l'état local
        setTattoos(prevTattoos => 
          prevTattoos.map(tattoo => 
            tattoo.id === tattooId 
              ? { ...tattoo, favoris: !currentStatus }
              : tattoo
          )
        );
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour des favoris:', error);
    }
  };

  // Filtrer les tatouages selon l'onglet actif
  const filteredTattoos = activeTab === 'favoris' 
    ? tattoos.filter(t => t.favoris) 
    : tattoos;

  // Trier pour mettre les favoris en premier dans l'onglet "all"
  const sortedTattoos = activeTab === 'all'
    ? [...filteredTattoos].sort((a, b) => {
        if (a.favoris && !b.favoris) return -1;
        if (!a.favoris && b.favoris) return 1;
        return new Date(b.created) - new Date(a.created);
      })
    : [...filteredTattoos].sort((a, b) => new Date(b.created) - new Date(a.created));

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10 mx-10 text-xl">
          <h3 className="p-0">Mon profil</h3>
          <button onClick={onLogout} className="text-gray-400 hover:text-white">
            Déconnexion
          </button>
        </div>

        <div className="flex gap-8 border-b border-gray-800 mb-10">
          <button 
            onClick={() => setActiveTab('all')}
            className={`font-medium pb-2 transition-colors ${
              activeTab === 'all' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Mes tatouages ({tattoos.length})
          </button>
          <button 
            onClick={() => setActiveTab('favoris')}
            className={`font-medium pb-2 transition-colors ${
              activeTab === 'favoris' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            Favoris ({tattoos.filter(t => t.favoris).length})
          </button>
        </div>

        {loading ? (
          <p className="text-gray-400 text-center">Chargement...</p>
        ) : sortedTattoos.length === 0 ? (
          <p className="text-gray-500 text-center">
            {activeTab === 'favoris' 
              ? 'Aucun tatouage en favoris.' 
              : 'Aucun tatouage généré.'
            }
          </p>
        ) : (
          <div className="space-y-10">
            {sortedTattoos.map((t) => (
              <div key={t.id} className="bg-gray-900 p-4 rounded-xl border border-gray-800 relative">
                {/* Bouton favoris */}
                <button
                  onClick={() => toggleFavoris(t.id, t.favoris)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${
                    t.favoris 
                      ? 'text-red-500 hover:text-red-400 bg-gray-800' 
                      : 'text-gray-400 hover:text-red-500 bg-gray-800 hover:bg-gray-700'
                  }`}
                  title={t.favoris ? "Retirer des favoris" : "Ajouter aux favoris"}
                >
                  <svg 
                    className="w-6 h-6" 
                    fill={t.favoris ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                </button>

                <div className="mb-3 pr-12">
                  <p className="text-sm text-gray-300 italic">"{t.prompt}"</p>
                  {t.favoris && (
                    <span className="inline-block mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                      ❤ Favori
                    </span>
                  )}
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