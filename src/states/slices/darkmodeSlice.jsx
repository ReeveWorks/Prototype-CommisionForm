import { createSlice } from '@reduxjs/toolkit';
import darkicon from '../../assets/dark_mode.svg';
import lighticon from '../../assets/light_mode.svg';

const initialState = {
    darkmode: {
        isDarkmode: true,
        imageSource: darkicon,
    },
};

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        togglemode: (state, action) => {
            const toggle = action.payload;
            const root = document.documentElement;

            if (toggle) {
                root.classList.remove('light');
                root.classList.add('dark');
            }
            else if (!toggle) {
                root.classList.remove('dark');
                root.classList.add('light');
            }
            else {
                console.error('Invalid toggle value:', toggle);
                return;
            }

            state.darkmode = {
                isDarkmode: toggle,
                imageSource: toggle ? darkicon : lighticon
            }
        }
    }
});

export const { togglemode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;