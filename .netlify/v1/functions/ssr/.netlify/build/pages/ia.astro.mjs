import { c as createComponent, g as renderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Es-WI7P7.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function AuthComponent({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: ""
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
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });
        const data = await res.json();
        if (data.success) {
          onAuthSuccess(data.user);
        } else {
          alert("Erreur de connexion: " + data.error);
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          alert("Les mots de passe ne correspondent pas");
          return;
        }
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
          alert("Erreur d'inscription: " + data.error);
        }
      }
    } catch (error) {
      alert("Erreur: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-black flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700", children: /* @__PURE__ */ jsx("svg", { className: "w-10 h-10 text-gray-300", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-white mb-2", children: isLogin ? "Connectez-vous" : "Créer un compte" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: isLogin ? "Accédez à vos tatouages personnalisés" : "Rejoignez la communauté des tatouages IA" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      !isLogin && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "username",
          placeholder: "Nom d'utilisateur",
          className: "w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-colors placeholder-gray-500",
          value: formData.username,
          onChange: handleInputChange,
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          name: "email",
          placeholder: "Email",
          className: "w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-colors placeholder-gray-500",
          value: formData.email,
          onChange: handleInputChange,
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "password",
          placeholder: "Mot de passe",
          className: "w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-colors placeholder-gray-500",
          value: formData.password,
          onChange: handleInputChange,
          required: true
        }
      ) }),
      !isLogin && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          name: "confirmPassword",
          placeholder: "Confirmer le mot de passe",
          className: "w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-colors placeholder-gray-500",
          value: formData.confirmPassword,
          onChange: handleInputChange,
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSubmit,
          disabled: loading,
          className: "w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-6 border border-gray-700 hover:border-gray-600",
          children: loading ? isLogin ? "Connexion..." : "Inscription..." : isLogin ? "Connexion" : "Créer un compte"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setIsLogin(!isLogin),
        className: "text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4",
        children: isLogin ? "création de compte" : "Déjà un compte ? Se connecter"
      }
    ) })
  ] }) });
}

function TattooChat({ user, onLogout }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadUserTattoos();
  }, [user.id]);
  const loadUserTattoos = async () => {
    try {
      const res = await fetch(`/api/tattoos/user/${user.id}`);
      const data = await res.json();
      if (data.success) {
        const tattooMessages = data.tattoos.map((tattoo) => ({
          id: tattoo.id,
          type: "ai_response",
          prompt: tattoo.prompt,
          image: tattoo.image,
          timestamp: tattoo.created
        }));
        tattooMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        setMessages(tattooMessages);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des tatouages:", error);
    }
  };
  const generateTattoo = async () => {
    if (!newMessage.trim()) return;
    setLoading(true);
    const userMessage = {
      id: Date.now(),
      type: "user_message",
      content: newMessage,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentPrompt = newMessage;
    setNewMessage("");
    try {
      const res = await fetch("/api/text2img", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: currentPrompt,
          userId: user.id
        })
      });
      const data = await res.json();
      if (data.output) {
        const aiMessage = {
          id: data.saveId || Date.now() + 1,
          type: "ai_response",
          prompt: currentPrompt,
          image: data.output,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        alert("Erreur: " + JSON.stringify(data.error || "inconnue"));
      }
    } catch (error) {
      alert("Erreur: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateTattoo();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-900 p-4 border-b border-gray-800 flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-300", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-medium text-white", children: user.username }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Assistant Tatouage IA" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onLogout,
          className: "text-gray-400 hover:text-white transition-colors text-sm",
          children: "Déconnexion"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-4 max-w-4xl mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      messages.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-700", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2 text-white", children: "Commencez votre première création" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm leading-relaxed max-w-md mx-auto", children: "Décrivez le tatouage que vous voulez et notre IA le créera pour vous" })
      ] }) : messages.map(
        (message) => message.type === "user_message" ? /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-800 text-white p-4 rounded-2xl max-w-xs lg:max-w-md border border-gray-700", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: message.content }) }) }, message.id) : /* @__PURE__ */ jsx("div", { className: "flex justify-start mb-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 p-4 rounded-2xl max-w-sm lg:max-w-lg border border-gray-800", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-gray-300 mb-3 text-xs italic border-l-2 border-gray-700 pl-3", children: [
            '"',
            message.prompt,
            '"'
          ] }),
          message.image && /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-white mb-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: message.image,
              alt: "Tatouage généré",
              className: "w-full max-h-80 object-contain"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: new Date(message.timestamp).toLocaleString("fr-FR") })
        ] }) }, message.id)
      ),
      loading && /* @__PURE__ */ jsx("div", { className: "flex justify-start mb-6", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 p-4 rounded-2xl border border-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-pulse", style: { animationDelay: "0.2s" } }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-pulse", style: { animationDelay: "0.4s" } })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm ml-2", children: "Génération en cours..." })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-800 p-4 bg-gray-900 flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Décrivez votre tatouage...",
          className: "flex-1 bg-black text-white p-4 rounded-2xl border border-gray-700 focus:border-gray-500 focus:outline-none transition-colors placeholder-gray-500 text-sm",
          value: newMessage,
          onChange: (e) => setNewMessage(e.target.value),
          onKeyPress: handleKeyPress,
          disabled: loading
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: generateTattoo,
          disabled: loading || !newMessage.trim(),
          className: "bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-700 hover:border-gray-600 text-sm font-medium",
          children: loading ? "..." : "Envoyer"
        }
      )
    ] }) }) })
  ] });
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const savedUser = localStorage.getItem("tattoo_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Erreur parsing user data:", error);
        localStorage.removeItem("tattoo_user");
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-900 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-white", children: "Chargement..." }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsx(AuthComponent, { onAuthSuccess: handleAuthSuccess });
  }
  return /* @__PURE__ */ jsx(TattooChat, { user, onLogout: handleLogout });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><title>Generateur de Tatouage IA</title>${renderHead()}</head> <body class="bg-gray-100 p-10"> <h1 class="text-3xl font-bold text-center mb-6">Tatouage par IA 🐉</h1> ${renderComponent($$result, "App", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/App.jsx", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/ia/index.astro", void 0);

const $$file = "C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/ia/index.astro";
const $$url = "/ia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
