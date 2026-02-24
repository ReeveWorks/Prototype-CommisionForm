import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    artist: {
        id: "123456789",
        username: "user1",
        email: "user1@example.com",
        products: [
            {
                productID: "us89-1",
                productName: "Artwork 1",
                productDescription: "A beautiful piece of art.",
                modifiers: [
                    {
                        modifierID: "us89-1-mod1",
                        modifierName: "Size",
                        modifierOptions: ["Small", "Medium", "Large"],
                    }
                ],
            },
            {
                productID: "us89-2",
                productName: "Artwork 2",
                productDescription: "Another stunning artwork.",
                modifiers: [
                    {
                        modifierID: "us89-2-mod1",
                        modifierName: "Size",
                        modifierOptions: ["Small", "Medium", "Large"],
                    }
                ],
            },
        ],
    },
};

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload;
            state.artist.products.push(newProduct);
        },
        updateProduct: (state, action) => {
            const updatedProduct = action.payload;
            const index = state.artist.products.findIndex(product => product.productID === updatedProduct.productID);
            if (index !== -1) {
                state.artist.products[index] = updatedProduct;
            }
        },
    }
});

export const { addProduct, updateProduct } = artistSlice.actions;
export default artistSlice.reducer;