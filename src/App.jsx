import React from 'react'
import Principal from './components/Principal'
import Header from './components/Header'

export default function App() {
  return (
    <main className='flex flex-col items-center'>
      <Header/>
      <Principal/>
    </main>
  )
}
