module Snapshot.DynamicImportExports
  ( addPre
  ) where

import Prelude

import Data.Array as Array
import Data.Foldable (class Foldable)

addPre :: forall a f. Show a => Foldable f => f a -> Array String
addPre =  map (("pre" <> _) <<< show) <<< Array.fromFoldable

newtype New a = New a 

