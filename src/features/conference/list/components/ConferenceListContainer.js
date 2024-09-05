import React from 'react'
import ConferenceFilters from './ConferenceFilters'
import conferences from 'utils/mocks/conferences'
import { FakeText } from '@totalsoft/rocket-ui'
import ConferenceList from './ConferenceList'
import { useState } from 'react'

const ConferenceListContainer = () => {
  const { data, loading } = { data: conferences, loading: false } // don't worry about it! it will make a lot more sense after GraphQL

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <>
      <ConferenceFilters />
      <ConferenceList conferences={data} />
    </>
  )
}

export default ConferenceListContainer
