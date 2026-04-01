/* Stylesheets */
import './styles/app.css'

/* Functions/Hooks */
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'

/* Pages */
import Header from './components/header.jsx';
import ArtistProducts from './components/artistProducts.jsx';
import ProductData from './components/productData.jsx';
import TestView from './test-reference/productData-format.jsx';
import TestView2 from './test-reference/productData-base.jsx';

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <div className="app">
      <Header />

      <TestView2 />
      {/* <TestView /> */}
    </div>
  )
}

export default App
