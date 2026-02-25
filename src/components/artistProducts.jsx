/* Stylesheets */

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

function artistProducts() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <h1>Your Products</h1>
            {/* Render artist products here */}
        </div>
    );
}

export default artistProducts;