/* Stylesheets */
import '../styles/header.css'

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { togglemode } from '../states/slices/darkmodeSlice'


function header() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  function toggleDarkmode() {
    dispatch(togglemode(!darkmode.isDarkmode));
  }

  return (
    <header className='txt-unselectable'>
      <div className='logo'>
        <img className="clickable" src={darkmode.imageSource} alt="Dark Mode" onClick={() => toggleDarkmode()} />
        <h1>moeyoy</h1>
      </div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default header