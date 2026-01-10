import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C-NrzCET.js","_app/immutable/chunks/B-lBlEvR.js","_app/immutable/chunks/DVHnvNiM.js","_app/immutable/chunks/DETSXESc.js","_app/immutable/chunks/KAl6VF4Y.js","_app/immutable/chunks/Bofu2E5G.js","_app/immutable/chunks/kDOZtEjq.js","_app/immutable/chunks/BuZs-ncu.js","_app/immutable/chunks/CjcB4Qx5.js","_app/immutable/chunks/DKi_IBpn.js"];
export const stylesheets = ["_app/immutable/assets/0.fPOgfzGs.css"];
export const fonts = [];
