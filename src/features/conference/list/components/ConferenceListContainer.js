import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react'
import ConferenceFilters from './ConferenceFilters'
import conferences from 'utils/mocks/conferences'
import { FakeText } from '@totalsoft/rocket-ui'
import ConferenceList from './ConferenceList'
import { generateDefaultFilters } from 'utils/functions'
import { useTranslation } from 'react-i18next'
import ConferenceHeader from 'features/conference/ConferenceHeader'
import { IconButton } from '@totalsoft/rocket-ui'
import { useHeader } from 'providers/AreasProvider'

const ConferenceListContainer = () => {
  const { t } = useTranslation()
  const { data, loading } = { data: conferences, loading: false } // don't worry about it! it will make a lot more sense after GraphQL
  const [filters, setFilters] = useState(generateDefaultFilters())
  const handleApplyFilters = useCallback(filters => setFilters(filters), [])

  const [, setHeader] = useHeader()
  //..

  useLayoutEffect(() => () => setHeader(null), [setHeader])

  useEffect(() => {
    setHeader(
      <ConferenceHeader
        title={t('NavBar.Conferences')}
        actions={<IconButton type='add' key='addButton' title={t('General.Buttons.AddConference')} />}
      />
    )
  }, [setHeader, t])
  //..
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
