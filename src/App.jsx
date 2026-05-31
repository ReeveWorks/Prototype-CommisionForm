/* Stylesheets */
import './styles/app.css'

/* Functions/Hooks */
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'

/* Pages */
import Header from './components/header.jsx';
import OwnerProduct from './components/owner/owner-product.jsx';
import TestView from './test-reference/productData-format.jsx';

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <div className="app">
      <Header />

      <OwnerProduct />
      {/* <TestView /> */}
    </div>
  )
}

export default App
