import * as Control$dPromise from "../Control.Promise/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const addPreLazy = dictMonadAff => dictMonadAff.liftAff(Effect$dAff._bind(Effect$dAff._liftEffect((() => import("../Snapshot.DynamicImportExports/index.js").then(
  Snapshot$dDynamicImportExports => Snapshot$dDynamicImportExports.addPre(Data$dShow.showInt)(Data$dList$dTypes.foldableList)
))))(Control$dPromise.toAff$p(Control$dPromise.coerce)));
export {addPreLazy};
