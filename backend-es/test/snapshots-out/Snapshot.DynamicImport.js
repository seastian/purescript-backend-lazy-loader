const lazyCharCode = (() => import("../Data.Enum/index.js").then((m) => m.toCharCode));
export {lazyCharCode};
