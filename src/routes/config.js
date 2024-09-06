import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'
import welcome from 'features/welcome/Welcome'
import { Forbidden, NotFound } from '@totalsoft/rocket-ui'
import ConferenceListContainer from 'features/conference/list/components/ConferenceListContainer'
import ConferenceContainer from 'features/conference/edit/components/ConferenceContainer'

export const notLoggedInRoutes = [
  { path: '/welcome', element: <CustomRoute isPrivate={false} component={welcome} /> },
  { path: '*', element: <Navigate replace to='/welcome' /> }
]

export const routes = [
  { path: '/', element: <Navigate replace to='/welcome' /> },
  { path: '/welcome', element: <CustomRoute isPrivate={false} component={welcome} /> },
  { path: '/forbidden', element: <Forbidden /> },
  { path: '/conferences', element: <CustomRoute isPrivate={false} component={ConferenceListContainer} /> },
  { path: '/conferences/:id', element: <ConferenceContainer /> },
  { path: '*', element: <NotFound title='PageNotFound' /> }
]

export default routes
