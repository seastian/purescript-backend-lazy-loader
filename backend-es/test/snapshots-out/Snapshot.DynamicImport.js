const lazyCharCode = (() => import("../Data.Enum/index.js").then(Data$dEnum => Data$dEnum.toCharCode));
export {lazyCharCode};
