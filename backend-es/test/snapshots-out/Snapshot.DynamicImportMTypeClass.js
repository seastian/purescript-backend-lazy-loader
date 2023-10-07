import * as Control$dPromise from "../Control.Promise/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const lazyFromFoldable = dictMonadAff => dictFoldable => {
  const $0 = dictFoldable.foldr;
  return dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect((() => import("../Data.Array/index.js").then((m) => m.fromFoldableImpl))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
};
export {lazyFromFoldable};
