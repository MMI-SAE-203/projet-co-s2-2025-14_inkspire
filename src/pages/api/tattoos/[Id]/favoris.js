import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.victor-landwerlin.fr');

export async function PATCH({ request, params }) {
  try {
    const tattooId = params.id;
    const { favoris } = await request.json();

    // Mettre à jour le statut favoris dans PocketBase
    const updatedTattoo = await pb.collection('tatouage_ia').update(tattooId, {
      favoris: favoris
    });

    return new Response(JSON.stringify({
      success: true,
      tattoo: updatedTattoo
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour des favoris:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Erreur lors de la mise à jour des favoris'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}