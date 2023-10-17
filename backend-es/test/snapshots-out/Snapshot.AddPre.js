import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
const addPre = dictShow => dictFoldable => {
  const $0 = Data$dFunctor.arrayMap(x => "pre" + dictShow.show(x));
  const $1 = dictFoldable.foldr;
  return x => $0(Data$dArray.fromFoldableImpl($1, x));
};
export {addPre};
