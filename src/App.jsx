import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'
import Header from './components/header.jsx';
import './styles/app.css'


function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  function toggleDarkmode() {
    dispatch(togglemode(!darkmode.isDarkmode));
  }

  return (
    <div className="app">
      <Header />

      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>Dark Mode is <b>{darkmode.isDarkmode ? "Enabled" : "Disabled"}</b></p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
    </div>
  )
}

export default App
