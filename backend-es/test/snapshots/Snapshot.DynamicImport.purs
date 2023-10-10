module Snapshot.DynamicImport (lazyCharCode, main) where

import Prelude

import Assert (assertEqual)
import Control.Promise (Promise, toAffE)
import Data.Char (toCharCode)
import DynamicImport (dynamicImport)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)

lazyCharCode :: Effect (Promise (Char -> Int))
lazyCharCode = dynamicImport toCharCode

main :: Effect Unit
main = launchAff_ do
  charCode <- toAffE lazyCharCode
  liftEffect $ assertEqual "DynamicImport/lazyCharCode"
    { expected: 97
    , actual: charCode 'a'
    }