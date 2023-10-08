module Snapshot.DynamicImportMTypeClass
  ( lazyFromFoldable
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

lazyFromFoldable :: forall m f a. MonadAff m => Foldable f => m (f a -> Array a)
lazyFromFoldable = dynamicImportM Array.fromFoldable

main :: Effect Unit
main = launchAff_ do
  fromFoldable <- lazyFromFoldable
  liftEffect $ assertEqual "DynamicImportMTypeClass/lazyFromFoldable"
    { expected: [ 1, 2, 3 ]
    , actual: fromFoldable (1 : 2 : 3 : Nil)
    }

