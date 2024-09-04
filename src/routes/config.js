import React from 'react'
import { Navigate } from 'react-router-dom'
import CustomRoute from 'components/routing/CustomRoute'
import HelloWorld from 'features/helloWorld/HelloWorld'

import { Forbidden, NotFound } from '@totalsoft/rocket-ui'

const routes = [
  { path: '/', element: <Navigate replace to='/dashboard' /> },
  { path: '/helloWorld', element: <CustomRoute isPrivate={false} component={HelloWorld} /> },
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound title="PageNotFound" /> }
]



export default routes
