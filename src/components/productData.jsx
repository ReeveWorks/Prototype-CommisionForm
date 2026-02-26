/* Stylesheets */

/* Functions/Hooks */
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { addProduct, updateProduct } from '../states/slices/artistDataSlice'

function productData() {
    /* Redux */
    const artistData = useSelector((state) => state.artist.artist);
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <h1>Product Info</h1>
        </div>
    );
}

export default productData;