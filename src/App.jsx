import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'

import './App.scss'

const App = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}

export default App
