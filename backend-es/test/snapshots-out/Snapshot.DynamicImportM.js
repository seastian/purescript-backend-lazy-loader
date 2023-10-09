import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const lazyCharCodeM = dictMonadAff => dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect((() => import("../Data.Enum/index.js").then(
  Data$dEnum => Data$dEnum.toCharCode
))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
export {lazyCharCodeM};
