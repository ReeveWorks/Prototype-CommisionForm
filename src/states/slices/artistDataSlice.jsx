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
                        id: "st-txt01",
                        type: "Static Text",
                        group: "",
                        bold: false,
                        textAlign: "center",
                        size: 25,
                        spacing: 20,
                        content: "Fill in your commission details!",
                    },
                    {
                        id: "in-txt02",
                        type: "Text Input",
                        group: "",
                        isRequired: true,
                        bold: false,
                        textbox: false,
                        textAlign: "left",
                        size: 20,
                        spacing: 10,
                        content: "Commission Title"
                    },
                    {
                        id: "in-txt03",
                        type: "Text Input",
                        group: "",
                        bold: false,
                        textbox: true,
                        size: 20,
                        spacing: 10,
                        isRequired: false,
                        content: "Details"
                    },
                    {
                        id: "in-num04",
                        type: "Number Input",
                        group: "",
                        bold: false,
                        size: 20,
                        spacing: 20,
                        isRequired: false,
                        content: "Number of Chibi reaction",
                        min: 1,
                        max: 10,
                    },
                    {
                        id: "contbx05",
                        type: "Container Box",
                        group: "contbx05",
                        isRequired: false,
                        spacing: 10,
                        module: [
                            {
                                id: "st-txt06",
                                type: "Static Text",
                                group: "contbx05",
                                bold: false,
                                textAlign: "center",
                                size: 20,
                                spacing: 0,
                                content: "This is a test:",
                            },
                            {
                                id: "in-txt07",
                                type: "Text Input",
                                group: "contbx05",
                                isRequired: true,
                                bold: false,
                                textbox: false,
                                textAlign: "left",
                                size: 20,
                                spacing: 10,
                                content: "test_"
                            },

                        ]
                    },
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