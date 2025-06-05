import PocketBase from 'pocketbase';
export { renderers } from '../../../renderers.mjs';

const pb = new PocketBase('https://pocketbase.victor-landwerlin.fr');

async function POST({ request }) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Email et mot de passe requis" 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Authentification avec PocketBase
    const authData = await pb.collection('users').authWithPassword(email, password);
    
    console.log('Connexion réussie:', authData.record);

    return new Response(JSON.stringify({ 
      success: true, 
      user: {
        id: authData.record.id,
        email: authData.record.email,
        username: authData.record.username,
        avatar: authData.record.avatar
      },
      token: authData.token
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error('Erreur de connexion:', error);
    
    let errorMessage = "Erreur de connexion";
    if (error.status === 400) {
      errorMessage = "Email ou mot de passe incorrect";
    }
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
