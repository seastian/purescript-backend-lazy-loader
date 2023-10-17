module Snapshot.DynamicImportMultipleTypeClasses
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
import Snapshot.AddPre (addPre)

addPreLazy :: forall m f a. Show a => MonadAff m => Foldable f => m (f a -> Array String)
addPreLazy = dynamicImportM addPre

main :: Effect Unit
main = launchAff_ do
  addPre_ <- addPreLazy
  liftEffect $ assertEqual "DynamicImportMultipleTypeClasses/addPre"
    { expected: [ "pre1", "pre2" ]
    , actual: addPre_ (1 : 2 : Nil)
    }

