-- | 

module Snapshot.LazyLoad (lazyCharCode) where

import Control.Promise (Promise)
import Data.Char (toCharCode)
import DynamicImport (dynamicImport)
import Effect (Effect)

lazyCharCode :: Effect (Promise (Char -> Int))
lazyCharCode = dynamicImport toCharCode
