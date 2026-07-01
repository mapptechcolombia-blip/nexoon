globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"958-znZoVw1HZUFaqWUR2k+sw2qOBPc\"",
		"mtime": "2026-06-25T14:50:25.872Z",
		"size": 2392,
		"path": "../public/logo.svg"
	},
	"/logotipo_white.svg": {
		"type": "image/svg+xml",
		"etag": "\"63c-oiU3PZSwRedYuzitcpIXhOb9/zU\"",
		"mtime": "2026-06-25T14:50:25.873Z",
		"size": 1596,
		"path": "../public/logotipo_white.svg"
	},
	"/clients/logotipo-cae.png": {
		"type": "image/png",
		"etag": "\"1853-I/4BdQA1B8s8vwcG7bA/P+KKVB0\"",
		"mtime": "2026-06-25T14:50:25.861Z",
		"size": 6227,
		"path": "../public/clients/logotipo-cae.png"
	},
	"/assets/routes-CduBVKJ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28138-Wwzqan+ABFUV5HPiOyGH7qI0PFs\"",
		"mtime": "2026-07-01T23:05:40.503Z",
		"size": 164152,
		"path": "../public/assets/routes-CduBVKJ6.js"
	},
	"/clients/logotipo-greet-energy.png": {
		"type": "image/png",
		"etag": "\"1a3b-0tBc8iuHqhv8dkQnEieTgyoFjw0\"",
		"mtime": "2026-06-25T14:50:25.863Z",
		"size": 6715,
		"path": "../public/clients/logotipo-greet-energy.png"
	},
	"/assets/styles-DBN4CAPG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"a40b-06AbxCFTmbPlEKa6Wl1txxeF28M\"",
		"mtime": "2026-07-01T23:05:40.503Z",
		"size": 41995,
		"path": "../public/assets/styles-DBN4CAPG.css"
	},
	"/clients/logotipo-kovia.png": {
		"type": "image/png",
		"etag": "\"16c8-vKxmg2O7zo9CAYgSfUgIy99FSKg\"",
		"mtime": "2026-06-25T14:50:25.863Z",
		"size": 5832,
		"path": "../public/clients/logotipo-kovia.png"
	},
	"/clients/logotipo-fiancol.png": {
		"type": "image/png",
		"etag": "\"7971-rEfSTR2VDjLkt2RIpy4EbEWrcWk\"",
		"mtime": "2026-06-25T14:50:25.862Z",
		"size": 31089,
		"path": "../public/clients/logotipo-fiancol.png"
	},
	"/clients/logotipo-netwifi.png": {
		"type": "image/png",
		"etag": "\"23a1-V8z/gxUEIrAMIngkT1XL65ILVQo\"",
		"mtime": "2026-06-25T14:50:25.869Z",
		"size": 9121,
		"path": "../public/clients/logotipo-netwifi.png"
	},
	"/clients/logotipo-outliners.png": {
		"type": "image/png",
		"etag": "\"1764-ofJDHN9dx0/qF6bi7jtNE8gJXQQ\"",
		"mtime": "2026-06-25T14:50:25.870Z",
		"size": 5988,
		"path": "../public/clients/logotipo-outliners.png"
	},
	"/clients/logotipo-vittorino.png": {
		"type": "image/png",
		"etag": "\"f27-nzClFdaq7eTNZ79jYEyzdvldnUk\"",
		"mtime": "2026-06-25T14:50:25.871Z",
		"size": 3879,
		"path": "../public/clients/logotipo-vittorino.png"
	},
	"/clients/logotipo-vertice.png": {
		"type": "image/png",
		"etag": "\"1323-jf7XmGBpeDHawvw9i2ROecKwLDA\"",
		"mtime": "2026-06-25T14:50:25.870Z",
		"size": 4899,
		"path": "../public/clients/logotipo-vertice.png"
	},
	"/clients/logotipo-wow.png": {
		"type": "image/png",
		"etag": "\"1e54-MB/hrrHWDf1PjdvG6Zykwu8TDeA\"",
		"mtime": "2026-06-25T14:50:25.871Z",
		"size": 7764,
		"path": "../public/clients/logotipo-wow.png"
	},
	"/assets/index-Dew04Mds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54695-0d4k4yyUO/fP4U0o6CvY+K9AgqA\"",
		"mtime": "2026-07-01T23:05:40.502Z",
		"size": 345749,
		"path": "../public/assets/index-Dew04Mds.js"
	},
	"/methodology/diseñar.png": {
		"type": "image/png",
		"etag": "\"1e763-DeyazKVfyG1oqM3Vb1PA21kDqks\"",
		"mtime": "2026-06-25T14:50:25.875Z",
		"size": 124771,
		"path": "../public/methodology/diseñar.png"
	},
	"/methodology/entender.png": {
		"type": "image/png",
		"etag": "\"2283c-Gx+k/tshrfmmQUBZBM5U/TIbPsg\"",
		"mtime": "2026-06-25T14:50:25.877Z",
		"size": 141372,
		"path": "../public/methodology/entender.png"
	},
	"/methodology/ejecuta.png": {
		"type": "image/png",
		"etag": "\"20ebd-H1aQNStQfenB29VRcDIMAIhlixE\"",
		"mtime": "2026-06-25T14:50:25.876Z",
		"size": 134845,
		"path": "../public/methodology/ejecuta.png"
	},
	"/clients/logotipo-lavanderia-maritima.png": {
		"type": "image/png",
		"etag": "\"73b36-CAVQMyAHh8Jzgmz9f85EIPTbh/c\"",
		"mtime": "2026-06-25T14:50:25.867Z",
		"size": 473910,
		"path": "../public/clients/logotipo-lavanderia-maritima.png"
	},
	"/methodology/identificar.png": {
		"type": "image/png",
		"etag": "\"1ed80-1jAAZ3qnk49BWhY5dXMab82LUpY\"",
		"mtime": "2026-06-25T14:50:25.878Z",
		"size": 126336,
		"path": "../public/methodology/identificar.png"
	},
	"/methodology/resultados.png": {
		"type": "image/png",
		"etag": "\"13e3e-EVt003aiIJYBy/pzC6ijGXX13/U\"",
		"mtime": "2026-06-25T14:50:25.879Z",
		"size": 81470,
		"path": "../public/methodology/resultados.png"
	},
	"/services/estrategia.png": {
		"type": "image/png",
		"etag": "\"12720c-bYbsyomIqemoRurIY38NhYN+QG8\"",
		"mtime": "2026-06-25T14:50:25.903Z",
		"size": 1208844,
		"path": "../public/services/estrategia.png"
	},
	"/backgrounds/backgrounds.png": {
		"type": "image/png",
		"etag": "\"19defa-ZKWYf22svLBSYIAHqoIL7yRTMjs\"",
		"mtime": "2026-06-25T14:50:25.852Z",
		"size": 1695482,
		"path": "../public/backgrounds/backgrounds.png"
	},
	"/services/marketing.png": {
		"type": "image/png",
		"etag": "\"155bde-JY6vCCX2nITmicHs/ADBwt+VcpY\"",
		"mtime": "2026-06-25T14:50:25.910Z",
		"size": 1399774,
		"path": "../public/services/marketing.png"
	},
	"/services/negocios.png": {
		"type": "image/png",
		"etag": "\"1bc496-SwOc1hpw/2kAvpwUSfe8OMHsmGg\"",
		"mtime": "2026-06-25T14:50:25.920Z",
		"size": 1819798,
		"path": "../public/services/negocios.png"
	},
	"/services/analisis.png": {
		"type": "image/png",
		"etag": "\"20e9da-Qd/2HTKaFhWdejyfwkJn0Qjmim8\"",
		"mtime": "2026-06-25T14:50:25.890Z",
		"size": 2157018,
		"path": "../public/services/analisis.png"
	},
	"/services/ventas.png": {
		"type": "image/png",
		"etag": "\"108060-9JhUKW4S8QLix3tkhZw9oLSHsbE\"",
		"mtime": "2026-06-25T14:50:25.926Z",
		"size": 1081440,
		"path": "../public/services/ventas.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Pz_Gii = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Pz_Gii
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
