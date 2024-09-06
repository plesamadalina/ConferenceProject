import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Info, LocationOn, Face } from '@mui/icons-material'
import ConferenceInfo from './ConferenceInfo'
import ConferenceLocation from './ConferenceLocation'
import ConferenceSpeakers from './ConferenceSpeakers'
import { Card, IconButton } from '@totalsoft/rocket-ui'

const Conference = props => {
  const { types, categories, countries, counties, cities } = props
  const { t } = useTranslation()

  return (
    <>
      <Card icon={Info} title={t('Conference.Info')}>
        <ConferenceInfo types={types} categories={categories} />
      </Card>
      <Card icon={LocationOn} title={t('Conference.Location')}>
        <ConferenceLocation countries={countries} counties={counties} cities={cities} />
      </Card>
      <Card
        icon={Face}
        title={t('Conference.Speakers')}
        actions={[<IconButton type='add' key='addSpeakers' title={t('General.Buttons.AddSpeaker')} />]}
      >
        <ConferenceSpeakers />
      </Card>
    </>
  )
}

Conference.propTypes = {
  types: PropTypes.array,
  categories: PropTypes.array,
  countries: PropTypes.array,
  counties: PropTypes.array,
  cities: PropTypes.array
}

export default Conference
