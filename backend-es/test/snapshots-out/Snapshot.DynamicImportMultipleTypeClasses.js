import * as Assert from "../Assert/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
const addPreLazy = dictShow => dictMonadAff => dictFoldable => dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect((() => import("../Snapshot.DynamicImportExports/index.js").then(
  Snapshot$dDynamicImportExports => Snapshot$dDynamicImportExports.addPre(dictShow)(dictFoldable)
))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(addPreLazy(Data$dShow.showInt)(Effect$dAff$dClass.monadAffAff)(Data$dList$dTypes.foldableList))(addPre_ => Effect$dAff._liftEffect(Assert.assertEqual({
      eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)
    })({show: Data$dShow.showArrayImpl(Data$dShow.showStringImpl)})("DynamicImportMultipleTypeClasses/addPre")({
      expected: ["pre1", "pre2"],
      actual: addPre_(Data$dList$dTypes.$List("Cons", 1, Data$dList$dTypes.$List("Cons", 2, Data$dList$dTypes.Nil)))
    })))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {addPreLazy, main};
