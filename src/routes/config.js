import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'
import welcome from 'features/welcome/Welcome'

import { Forbidden, NotFound } from '@totalsoft/rocket-ui'


const routes = [
  { path: '/', element: <Navigate replace to='/welcome' /> },
  { path: '/welcome', element: <CustomRoute isPrivate={false} component={welcome} /> },
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound title="PageNotFound" /> }
]



export default routes
