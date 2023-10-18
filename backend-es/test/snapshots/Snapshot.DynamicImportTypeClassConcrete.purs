module Snapshot.DynamicImportTypeClassConcrete
  ( main
  ) where

import Prelude

import Assert (assertEqual)
import Data.Foldable (class Foldable)
import Data.List (List(..), (:))
import DynamicImport (dynamicImportM)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Aff.Class (class MonadAff)
import Effect.Class (liftEffect)
import Snapshot.DynamicImportExports (addPre)

addPreLazy :: forall m f. MonadAff m => m (List Int -> Array String)
addPreLazy = dynamicImportM addPre

main :: Effect Unit
main = launchAff_ do
  addPre_ <- addPreLazy
  liftEffect $ assertEqual "DynamicImportTypeClassConcrete/addPre"
    { expected: [ "pre1", "pre2" ]
    , actual: addPre_ (1 : 2 : Nil)
    }

