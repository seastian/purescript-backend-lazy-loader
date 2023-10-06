module Snapshot.DynamicImportAff (lazyCharCodeAff) where


import Data.Char (toCharCode)
import DynamicImport (dynamicImportAff)
import Effect.Aff (Aff)

lazyCharCodeAff :: Aff (Char -> Int)
lazyCharCodeAff = dynamicImportAff toCharCode
