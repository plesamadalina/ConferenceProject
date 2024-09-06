import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHeader } from 'providers/AreasProvider'
import ConferenceHeader from 'features/conference/ConferenceHeader'
import Conference from './Conference'
import { types, categories, countries, counties, cities } from 'utils/mocks/dictionaries'
import { FakeText, IconButton } from '@totalsoft/rocket-ui'

const ConferenceContainer = () => {
  const { t } = useTranslation()
  const [, setHeader] = useHeader()

  useEffect(() => () => setHeader(null), [setHeader])
  useEffect(() => {
    setHeader(<ConferenceHeader actions={<IconButton type='save' title={t('General.Buttons.Save')} />} />)
  }, [setHeader, t])

  const { loading, data } = {
    loading: false,
    data: {
      typeList: types,
      categoryList: categories,
      countryList: countries,
      countyList: counties,
      cityList: cities
    }
  }

  if (loading) {
    return <FakeText lines={10} />
  }

  return (
    <Conference
      types={data?.typeList}
      categories={data?.categoryList}
      countries={data?.countryList}
      counties={data?.countyList}
      cities={data?.cityList}
    />
  )
}

export default ConferenceContainer
