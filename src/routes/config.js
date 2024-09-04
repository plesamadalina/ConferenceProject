import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'

import { Forbidden, NotFound } from '@totalsoft/rocket-ui'

const routes = [
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound title="PageNotFound" /> }
]

export default routes
