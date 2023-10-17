import * as Assert from "../Assert/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
const lazyFromFoldable = dictMonadAff => dictFoldable => {
  const $0 = dictFoldable.foldr;
  return dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect((() => import("../Data.Array/index.js").then(Data$dArray => $1 => Data$dArray.fromFoldableImpl($0, $1)))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
};
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(lazyFromFoldable(Effect$dAff$dClass.monadAffAff)(Data$dList$dTypes.foldableList))(fromFoldable1 => Effect$dAff._bind(Effect$dAff._pure(Data$dArray.reverse(Data$dArray.fromFoldableImpl(
      Data$dFoldable.foldrArray,
      [2, 1]
    ))))(arr => Effect$dAff._liftEffect(Assert.assertEqual({eq: Data$dEq.eqArrayImpl(Data$dEq.eqIntImpl)})({show: Data$dShow.showArrayImpl(Data$dShow.showIntImpl)})("DynamicImportMixedImports/lazyFromFoldable")({
      expected: arr,
      actual: fromFoldable1(Data$dList$dTypes.$List("Cons", 1, Data$dList$dTypes.$List("Cons", 2, Data$dList$dTypes.Nil)))
    }))))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {lazyFromFoldable, main};