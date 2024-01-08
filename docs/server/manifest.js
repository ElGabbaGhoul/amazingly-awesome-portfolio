export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/FramedTransparentScooter.png","images/hades.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fs3_fDF_.js","app":"_app/immutable/entry/app.op-p53T0.js","imports":["_app/immutable/entry/start.fs3_fDF_.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/singletons.8YwqKGgq.js","_app/immutable/entry/app.op-p53T0.js","_app/immutable/chunks/scheduler.8fdumybZ.js","_app/immutable/chunks/index.9jcULZQe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
