import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Es-WI7P7.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/","cacheDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/node_modules/.astro/","outDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/dist/","srcDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/","publicDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/public/","buildClientDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/dist/","buildServerDir":"file:///C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/login.js","pathname":"/api/auth/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.js","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tattoos/user/[userid]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/tattoos\\/user\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tattoos","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"userId","dynamic":true,"spread":false}]],"params":["userId"],"component":"src/pages/api/tattoos/user/[userId].js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/text2img","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/text2img\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"text2img","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/text2img.js","pathname":"/api/text2img","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C3IjeSn2.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-lojjqdbu]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\nhtml,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/exploration/[id]","isIndex":false,"type":"page","pattern":"^\\/exploration\\/([^/]+?)\\/?$","segments":[[{"content":"exploration","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/exploration/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C3IjeSn2.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/exploration","isIndex":true,"type":"page","pattern":"^\\/exploration\\/?$","segments":[[{"content":"exploration","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/exploration/index.astro","pathname":"/exploration","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C3IjeSn2.css"}],"routeData":{"route":"/ia","isIndex":true,"type":"page","pattern":"^\\/ia\\/?$","segments":[[{"content":"ia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ia/index.astro","pathname":"/ia","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C3IjeSn2.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/tatouages/[id]","isIndex":false,"type":"page","pattern":"^\\/tatouages\\/([^/]+?)\\/?$","segments":[[{"content":"tatouages","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/tatouages/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C3IjeSn2.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/ia/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/exploration/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/pages/tatouages/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/login@_@js":"pages/api/auth/login.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@js":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/tattoos/user/[userId]@_@js":"pages/api/tattoos/user/_userid_.astro.mjs","\u0000@astro-page:src/pages/api/text2img@_@js":"pages/api/text2img.astro.mjs","\u0000@astro-page:src/pages/exploration/[id]@_@astro":"pages/exploration/_id_.astro.mjs","\u0000@astro-page:src/pages/exploration/index@_@astro":"pages/exploration.astro.mjs","\u0000@astro-page:src/pages/ia/index@_@astro":"pages/ia.astro.mjs","\u0000@astro-page:src/pages/tatouages/[id]@_@astro":"pages/tatouages/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DVks1sen.mjs","C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DhSQ0NP-.mjs","C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/App.jsx":"_astro/App.BY8RigXl.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header_LP.astro?astro&type=script&index=0&lang.ts":"_astro/Header_LP.astro_astro_type_script_index_0_lang.XivF6kZu.js","C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.XivF6kZu.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header_LP.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu\"),c=document.body;e&&t&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",o=!n;console.log(n,o),e.ariaExpanded=String(o),t.ariaHidden=String(n),c.classList.toggle(\"noscroll\",o)});"],["C:/Users/lacro/GitHub/projet-co-s2-2025-14_inkspire/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu\"),c=document.body;e&&t&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",o=!n;console.log(n,o),e.ariaExpanded=String(o),t.ariaHidden=String(n),c.classList.toggle(\"noscroll\",o)});"]],"assets":["/_astro/loupe.C3St2sx0.svg","/_astro/Hero-accueil.BdxXvP3d.webp","/_astro/minimaliste-geometrique_LP.Cq5b018D.jpg","/_astro/cartes.aFsQsT79.svg","/_astro/Buste.C7dNa4We.webp","/_astro/telecharger.D5wdRiF6.svg","/_astro/nature-animaux_LP.DjfbddfL.jpg","/_astro/japonais-traditionnel_LP.BY80Sa3c.jpg","/_astro/banniere-galerie.DvbRIWPN.jpg","/_astro/avis1.CRPcJJi6.jpg","/_astro/realiste_LP.CJVkU3lp.jpg","/_astro/avis2.BMAmBvXJ.jpg","/_astro/avis3.ZZGgI1w0.jpg","/_astro/instagram.DvT-DPJ1.svg","/_astro/X.DG5MApUQ.svg","/_astro/facebook.DdBZnfnO.svg","/_astro/logo.DtOkU-s1.svg","/_astro/gouttes_droites_lp.Bp-JBjZ7.webp","/_astro/gouttes_gauches_lp.CV2jfnnr.webp","/_astro/index.C3IjeSn2.css","/favicon.svg","/_astro/App.BY8RigXl.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9ipcdxqGIpsEWxt/rO3jQWz2Iu72+rBla126ARXGIRw=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\lacro\\GitHub\\projet-co-s2-2025-14_inkspire\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
