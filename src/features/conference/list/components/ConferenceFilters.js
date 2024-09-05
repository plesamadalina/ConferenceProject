import React from 'react'
import { Card, DateTime, Button } from '@totalsoft/rocket-ui'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'

const ConferenceFilters = () => {
  const { t } = useTranslation()

  return (
    <>
      <Card icon={SearchIcon}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} xl={3}>
            <DateTime label={t('Conferences.Filters.StartDate')} isClearable></DateTime>
          </Grid>
          <Grid item xs={12} md={4} xl={3}>
            <DateTime label={t('Conferences.Filters.EndDate')} isClearable></DateTime>
          </Grid>
        </Grid>
      </Card>
      <Button size={'small'} color={'primary'} right={true}>
        {t('General.Buttons.ResetFilters')}
      </Button>
      <Button size={'small'} color={'primary'} right={true} sx={{ marginRight: '10px' }}>
        {t('General.Buttons.ApplyFilters')}
      </Button>
    </>
  )
}

export default ConferenceFilters
