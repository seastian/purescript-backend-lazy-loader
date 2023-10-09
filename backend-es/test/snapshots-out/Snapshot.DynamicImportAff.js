import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const lazyCharCodeAff = /* #__PURE__ */ Effect$dAff._bind(/* #__PURE__ */ Effect$dAff._liftEffect((() => import("../Data.Enum/index.js").then(Data$dEnum => Data$dEnum.toCharCode))))(/* #__PURE__ */ Control$dPromise.toAff$p(Control$dPromise.coerce));
export {lazyCharCodeAff};
