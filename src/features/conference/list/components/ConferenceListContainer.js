import React, { useCallback, useState } from 'react'
import ConferenceFilters from './ConferenceFilters'
import conferences from 'utils/mocks/conferences'
import { FakeText } from '@totalsoft/rocket-ui'
import ConferenceList from './ConferenceList'
import { generateDefaultFilters } from 'utils/functions'

const ConferenceListContainer = () => {
  const { data, loading } = { data: conferences, loading: false } // don't worry about it! it will make a lot more sense after GraphQL
  const [filters, setFilters] = useState(generateDefaultFilters())
  const handleApplyFilters = useCallback(filters => setFilters(filters), [])

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <>
      <ConferenceFilters filters={filters} onApplyFilters={handleApplyFilters} />
      <ConferenceList conferences={data} />
    </>
  )
}

export default ConferenceListContainer
