-- @inline export dynamicImportAff always
-- @inline export dynamicImportM always
-- @dynamic-import export dynamicImport

module DynamicImport
  ( dynamicImport
  , dynamicImportAff
  , dynamicImportM
  )
  where

import Prelude

import Control.Promise (Promise, fromAff, toAffE)
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Aff.Class (class MonadAff, liftAff)

dynamicImportM ∷ ∀ (m ∷ Type -> Type) (a ∷ Type). MonadAff m ⇒ a → m a
dynamicImportM = liftAff <<< dynamicImportAff

dynamicImportAff :: forall a. a -> Aff a
dynamicImportAff a = toAffE (dynamicImport a)

dynamicImport :: forall a. a -> Effect (Promise a)
dynamicImport = fromAff <<< pure
