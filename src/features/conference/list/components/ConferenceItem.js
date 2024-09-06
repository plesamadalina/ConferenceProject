import React from 'react'
import PropTypes from 'prop-types'
import { useEmail } from 'hooks/useEmail'
import ConferenceTitle from './ConferenceTitle'
import { Card } from '@totalsoft/rocket-ui'
import ConferenceSubtitle from './ConferenceSubtitle'
import ConferenceContent from './ConferenceContent'

const ConferenceItem = props => {
  const { conference } = props
  const { name, organizerEmail, speakers, location } = conference
  const speaker = speakers.find(speaker => speaker.isMainSpeaker)

  const [email] = useEmail()
  // destructure the "organizerEmail" from the conference
  // compare the two emails and choose a title
  const title = email.toUpperCase() === organizerEmail.toUpperCase() ? <ConferenceTitle title={name} /> : name

  return (
    <Card title={title} subheader={<ConferenceSubtitle speaker={speaker} location={location} />}>
      <ConferenceContent conference={conference} />
    </Card>
  )
}

ConferenceItem.propTypes = {
  conference: PropTypes.object.isRequired
}

export default ConferenceItem
