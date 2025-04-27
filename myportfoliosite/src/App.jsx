import { useState } from 'react'
import Footer from './sections/Footer'
import './App.css'
import { Route, Router, Switch } from 'react-router-dom'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Profile from './sections/Profile'
import Projects from './sections/Projects'
import DarkMode from "./components/DarkMode"


function App() {
  
  return (
    <>
    <DarkMode/>
    <Header/>
    <Hero />
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer />
    </>
  )
}

export default App
