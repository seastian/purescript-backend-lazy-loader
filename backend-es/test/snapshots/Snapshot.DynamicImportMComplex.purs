module Snapshot.DynamicImportComplex
  ( addPre
  , main
  ) where

import Prelude

import Assert (assertEqual)
import Data.Array as Array
import Data.Foldable (class Foldable)
import Data.List (List(..), (:))
import DynamicImport (dynamicImportM)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Aff.Class (class MonadAff)
import Effect.Class (liftEffect)

addPre :: forall m f a. Show a => MonadAff m => Foldable f => m (f a -> Array String)
addPre = dynamicImportM $ map (("pre" <> _) <<< show) <<< Array.fromFoldable

main :: Effect Unit
main = launchAff_ do
  fromFoldable <- addPre
  liftEffect $ assertEqual "DynamicImportComplex/addPre"
    { expected: [ "pre1", "pre2" ]
    , actual: fromFoldable (1 : 2 : Nil)
    }

