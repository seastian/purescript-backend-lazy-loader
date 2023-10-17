import * as Assert from "../Assert/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as DynamicImport from "../DynamicImport/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
const addPre = dictShow => dictMonadAff => dictFoldable => {
  const $0 = Data$dFunctor.arrayMap(x => "pre" + dictShow.show(x));
  const $1 = dictFoldable.foldr;
  return dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect(DynamicImport.dynamicImport(x => $0(Data$dArray.fromFoldableImpl($1, x)))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
};
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(addPre(Data$dShow.showInt)(Effect$dAff$dClass.monadAffAff)(Data$dList$dTypes.foldableList))(fromFoldable => Effect$dAff._liftEffect(Assert.assertEqual({
      eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)
    })({show: Data$dShow.showArrayImpl(Data$dShow.showStringImpl)})("DynamicImportComplex/addPre")({
      expected: ["pre1", "pre2"],
      actual: fromFoldable(Data$dList$dTypes.$List("Cons", 1, Data$dList$dTypes.$List("Cons", 2, Data$dList$dTypes.Nil)))
    })))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {addPre, main};
