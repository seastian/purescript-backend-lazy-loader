const lazyCharCode = (() => import("../Data.Char/index.js").then((m) => m.toCharCode));
export {lazyCharCode};
