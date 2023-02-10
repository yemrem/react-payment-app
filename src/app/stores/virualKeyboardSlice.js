import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isCardNo: false,
    isSecurityNo: false,
    enteredCardNumber: [],
    enteredSecurityNumber: [],
    newNumber: NaN
}

export const virtualKeyboardSlice = createSlice({
    name: 'vkeyboard',
    initialState,

    reducers: {

        booleanSetter: (state, actions) => {
            state.isCardNo = actions.payload.isCardNo;
            state.isSecurityNo = actions.payload.isSecurityNo;
        },

        deleteNumber: (state) => {
            //splice and pop are same
            if (state.isCardNo && !state.isSecurityNo) {
                state.enteredCardNumber.splice(-1);
            };
            if (!state.isCardNo && state.isSecurityNo) {
                state.enteredSecurityNumber.pop();
            };
        },

        fillState: (state, actions) => {
            if (state.isCardNo && !state.isSecurityNo) {
                state.newNumber = actions.payload;
                if (state.enteredCardNumber.length > 0) {
                    state.enteredCardNumber = [...state.enteredCardNumber, actions.payload];
                } else {
                    state.enteredCardNumber.push(state.newNumber);
                }
            };
            if (!state.isCardNo && state.isSecurityNo) {
                state.newNumber = actions.payload;
                if (state.enteredSecurityNumber.length > 0) {
                    state.enteredSecurityNumber = [...state.enteredSecurityNumber, actions.payload];
                } else {
                    state.enteredSecurityNumber.push(state.newNumber);
                }
            };
        },

    },
});

export const { } = virtualKeyboardSlice;

export const selectNumber = (enteredCardNumber) => enteredCardNumber;

export const vkActions = virtualKeyboardSlice.actions;

export default virtualKeyboardSlice.reducer;