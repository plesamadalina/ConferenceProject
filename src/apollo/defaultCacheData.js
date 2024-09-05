// Here you define the default values for local apollo state (@client only values)
// https://www.apollographql.com/docs/react/local-state/local-state-management/

import { emptyString } from 'utils/constants'
import { emailKey } from './cacheKeyFunctions'

// e.g. [yourCacheKey]: yourDefaultValue
const emailValue = { email: emptyString }

export const defaults = {
  [emailKey]: emailValue
}
