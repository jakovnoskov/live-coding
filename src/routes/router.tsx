import React, { Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'
import { Main } from './Main'
import { GlobalLoader } from '../components/GlobalLoader'
import { Article } from '../components/Article'

export const router = createHashRouter([
  {
    path: '',
    element: <Suspense fallback={<GlobalLoader />}><Main /></Suspense>,
    children: [
      {
        path: '/',
        element: <Article />,
      }
    ]
  },
]) 