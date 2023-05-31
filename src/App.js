
import React from 'react'
import {Brand,Cta,Feature,Navbar} from './components'
import { Blog,Possibility ,Header,Footer,Whatgpt,Features} from './container'
import './App.css'

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Whatgpt />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);
export default App
