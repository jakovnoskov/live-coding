import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import '../../scss/main.scss'

export const Main: React.FC = () => {
  return (
    <div className='main-wrapper'>
      <div className='main-block'>
        <Header />
        <main id='main'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
