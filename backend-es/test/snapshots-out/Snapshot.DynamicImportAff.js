import * as Control$dPromise from "../Control.Promise/index.js";
const lazyCharCodeAff = Control$dPromise.toAffE((() => import("../Data.Char/index.js").then((m) => m.toCharCode)));
export {lazyCharCodeAff};
