import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'

import Header from './components/header.jsx';
import ArtistProducts from './components/artistProducts.jsx';
import ProductData from './components/artistProducts.jsx';
import './styles/app.css'


function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <div className="app">
      <Header />

      <ProductData />
    </div>
  )
}

export default App
