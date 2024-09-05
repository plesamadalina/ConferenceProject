import React from 'react'
import PropTypes from 'prop-types'
import ConferenceSubtitle from './ConferenceSubtitle'
import ConferenceContent from './ConferenceContent'
import { Card } from '@totalsoft/rocket-ui'

const ConferenceItem = props => {
  const { conference } = props
  const { name, speakers, location } = conference
  const speaker = speakers.find(speaker => speaker.isMainSpeaker)

  return (
    <Card title={name} subheader={<ConferenceSubtitle speaker={speaker} location={location} />}>
      <ConferenceContent conference={conference} />
    </Card>
  )
}

ConferenceItem.propTypes = {
  conference: PropTypes.object.isRequired
}

export default ConferenceItem
