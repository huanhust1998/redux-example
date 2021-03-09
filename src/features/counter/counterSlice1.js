import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "huanhustactions",
    initialState: {
        value: 'huanhust',
    },
    reducers: {
        luythua: state => {
            state.value += "h"
        }
    }
})

export const selectCount_LuyThua = state => state.luythua.value;

export const {luythua} = slice.actions

export default slice.reducer