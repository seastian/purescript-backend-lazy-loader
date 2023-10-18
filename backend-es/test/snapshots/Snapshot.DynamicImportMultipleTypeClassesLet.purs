module Snapshot.DynamicImportMultipleTypeClassesLet
  ( main
  ) where

import Prelude

import Assert (assertEqual)
import Data.Array (reverse)
import Data.List (List(..), (:))
import DynamicImport (dynamicImportM)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Snapshot.DynamicImportExports (addPre)

main :: Effect Unit
main = launchAff_ do
  let addPreLazy = map (map reverse) $ dynamicImportM $ addPre
  addPre_ <- addPreLazy
  liftEffect $ assertEqual "DynamicImportMultipleTypeClasses/addPre"
    { expected: [ "pre2", "pre1" ]
    , actual: addPre_ (1 : 2 : Nil)
    }

