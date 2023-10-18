module Snapshot.DynamicImportTypeClassConcrete where

import Data.List (List)
import DynamicImport (dynamicImportM)
import Effect.Aff.Class (class MonadAff)
import Snapshot.DynamicImportExports (addPre)

addPreLazy :: forall m. MonadAff m => m (List Int -> Array String)
addPreLazy = dynamicImportM addPre
