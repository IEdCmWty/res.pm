export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/icons.css","fonts/icons.woff2","img/app-icons/favicon.png","img/patterns/animals.svg","img/patterns/beach.svg","img/patterns/cats_and_dogs.svg","img/patterns/games.svg","img/patterns/grain-01.png","img/patterns/grain-02.png","img/patterns/late_night_delight.svg","img/patterns/math.svg","img/patterns/paris.svg","img/patterns/snowflakes.svg","img/patterns/space.svg","img/patterns/tattoos.svg","robots.txt"]),
	mimeTypes: {".css":"text/css",".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CjtzBiZ3.js",app:"_app/immutable/entry/app.C6vU8zW0.js",imports:["_app/immutable/entry/start.CjtzBiZ3.js","_app/immutable/chunks/BuZs-ncu.js","_app/immutable/chunks/DVHnvNiM.js","_app/immutable/chunks/CjcB4Qx5.js","_app/immutable/entry/app.C6vU8zW0.js","_app/immutable/chunks/DKi_IBpn.js","_app/immutable/chunks/DVHnvNiM.js","_app/immutable/chunks/DETSXESc.js","_app/immutable/chunks/B-lBlEvR.js","_app/immutable/chunks/CjcB4Qx5.js","_app/immutable/chunks/Bofu2E5G.js","_app/immutable/chunks/DzzsOHdm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/demo/paraglide",
				pattern: /^\/demo\/paraglide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
