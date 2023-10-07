module Snapshot.DynamicImportM (lazyCharCodeM) where

import Data.Char (toCharCode)
import DynamicImport (dynamicImportM)
import Effect.Aff.Class (class MonadAff)

lazyCharCodeM :: forall m. MonadAff m => m (Char -> Int)
lazyCharCodeM = dynamicImportM toCharCode
