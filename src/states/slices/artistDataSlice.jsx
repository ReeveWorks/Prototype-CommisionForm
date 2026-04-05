import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    artist: {
        id: "123456789",
        username: "user1",
        email: "user1@example.com",
        products: [
            {
                id: "us89-1",
                name: "Chibi",
                description: "A chibi reaction stickers to your liking!",
                module: [
                    {
                        id: "stm-ttl01",
                        type: "title",
                        size: "18",
                        spacing: "0.5",
                        content: "Fill in your commission details!",
                    },
                    {
                        id: "inm-txt02",
                        type: "text-input",
                        size: "13",
                        spacing: "0",
                        content: "Commission Title"
                    },
                    {
                        id: "inm-txt03",
                        type: "txtblock-input",
                        size: "13",
                        spacing: "0",
                        content: "Details"
                    },
                ],
            },
            {
                id: "us89-2",
                name: "Portrait",
                description: "A portrait of your favorite character!",
                module: [
                    { id: "stm-ttl01", type: "title", content: "Fill in your commission details!", size: "h3" },
                    { id: "inm-txt02", type: "text-input", content: "Any additional details?" },
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