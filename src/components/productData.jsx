/* Stylesheets */
import '../styles/product.css'

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
            <br />
            <input className="prod-textbox" type="text" placeholder="Product Name" />
            <br />
            <input className="prod-textbox" type="text" placeholder="Product Description"/>
            <br />
            <textarea className="prod-textbox" rows="5" cols="40">
                text here
            </textarea>
        </div>
    );
}

export default productData;