import * as Assert from "../Assert/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as DynamicImport from "../DynamicImport/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Snapshot$dDynamicImportExports from "../Snapshot.DynamicImportExports/index.js";
const addPre = /* #__PURE__ */ Snapshot$dDynamicImportExports.addPre(Data$dShow.showInt)(Data$dList$dTypes.foldableList);
const addPreLazy = dictMonadAff => dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect(DynamicImport.dynamicImport(addPre)))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(addPreLazy(Effect$dAff$dClass.monadAffAff))(addPre_ => Effect$dAff._liftEffect(Assert.assertEqual({eq: Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)})({
      show: Data$dShow.showArrayImpl(Data$dShow.showStringImpl)
    })("DynamicImportTypeClassConcrete/addPre")({
      expected: ["pre1", "pre2"],
      actual: addPre_(Data$dList$dTypes.$List("Cons", 1, Data$dList$dTypes.$List("Cons", 2, Data$dList$dTypes.Nil)))
    })))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {addPre, addPreLazy, main};
