import * as Assert from "../Assert/index.js";
import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const lazyCharCode = (() => import("../Data.Enum/index.js").then(Data$dEnum => Data$dEnum.toCharCode));
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(Effect$dAff._bind(Effect$dAff._liftEffect(lazyCharCode))(Control$dPromise.toAff$p(Control$dPromise.coerce)))(charCode => Effect$dAff._liftEffect(Assert.assertEqual(Data$dEq.eqInt)(Data$dShow.showInt)("DynamicImport/lazyCharCode")({
      expected: 97,
      actual: charCode("a")
    })))
  );
  return () => {
    const fiber = $0();
    fiber.run();
  };
})();
export {lazyCharCode, main};
