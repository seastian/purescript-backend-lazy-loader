-- @inline dynamicImport never
-- @inline export dynamicImport never
-- @dynamic import dynamicImport

module DynamicImport
  ( dynamicImport
  , import_
  )
  where

import Prelude

import Control.Promise (Promise, fromAff, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)

import_ :: forall a. a -> Aff a
import_ = toAffE <<< dynamicImport

dynamicImport :: forall a. a -> Effect (Promise a)
dynamicImport = fromAff <<< pure

