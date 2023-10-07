
module Snapshot.DynamicImportMTypeClass
  ( lazyFromFoldable
  )
  where

import Data.Array as Array
import Data.Foldable (class Foldable)
import DynamicImport (dynamicImportM)
import Effect.Aff.Class (class MonadAff)

lazyFromFoldable :: forall m f a. MonadAff m => Foldable f => m (f a -> Array a)
lazyFromFoldable = dynamicImportM Array.fromFoldable
